# psycopg2 (PostgreSQL database adapter is required
# pip install psycopg2
import psycopg2

from Customer import Customer
from Product import Product
from ShoppingCart import ShoppingCart


class DBHandler:
    def __init__(self):
        # create a connection
        self.conn = psycopg2.connect("host=localhost user=postgres password=postgrespw port=55000")
        self.cursor = self.conn.cursor()

    def execute(self, query, args):
        self.cursor.execute(query, args)
        results = self.cursor.fetchall()
        return results

    def checkCredential(self, username, password):
        userId = self.getUserId(username, password)
        return userId != -1

    def getUserId(self, username, password):
        query = "select id from jlttgrocery.users where username=%s and password=%s"
        results = self.execute(query, [username, password])
        if len(results) == 1:
            return results[0][0]
        return -1

    def addUser(self, username, password):
        query = "INSERT INTO jlttgrocery.users (username, password) VALUES (%s, %s)"
        self.execute(query, [username, password])
        userId = self.getUserId(username,password)
        self.initializeCustomer(userId)
        customer = self.getCustomer(userId)
        return len(customer) == 1

    def initializeCustomer(self, userId):
        query = "INSERT INTO jlttgrocery.customers (userId) VALUES (%s)"
        self.execute(query,[userId])

    def getCustomerId(self, userId):
        query = "select id from jlttgrocery.customers where user_id=%s"
        results = self.execute(query,[userId])
        if len(results) == 1:
            return results[0][0]
        return -1

    def getCustomer(self, customerId):
        query = "select customer_name, address, phone, email from jlttgrocery.customers where id=%s"
        results = self.execute(query,[customerId])
        customer_name, address, phone, email = results[0]
        customer = Customer(customerId, customer_name)
        customer.setAddress(address)
        customer.setPhone(phone)
        customer.setEmail(email)
        customer.shoppingCar = self.getShoppingCart(customerId)
        return customer

    def getShoppingCart(self, customerId):
        query = "select p.id, p.category, p.product_name, p.price, p.description, c.quantity from jlttgrocery.carts as c JOIN jlttgrocery.products p on c.product_id = p.id where customer_id = %s"
        results = self.execute(query, [customerId])
        shoppingCart = ShoppingCart()
        for result in results:
            productId, category, productName, price, description, quantity = result
            product = Product(productId, category, productName, price, description)
            shoppingCart.addProduct(product)
            if quantity != 1:
                shoppingCart.updateProductQuantity(product, quantity)
        shoppingCart.updateSubTotal()
        return shoppingCart

    def getProducts(self):
        query = "select id, category, product_name, price, description from jlttgrocery.products"
        results = self.execute(query)
        products = dict()
        for result in results:
            product_id = result[0]
            products[product_id] = Product(result)
        return products

    def updateCustomer(self, customer):
        query = "UPDATE CUSTOMERS SET customer_name = %s, address = %s, phone = %s, email = %s from jlttgrocery.products"
        self.execute(query,[customer.getName(), customer.getAddress(), customer.getPhone(), customer.getEmail()])
        return self.getCustomer(customer.getId())

    def checkProcutinCart(self, customerId, productId):
        query = "select count(*) from jlttgrocery.carts where customer_id = %s and product_id = %s"
        results = self.execute(query, [customerId, productId])
        return len(results) > 0

    def updateProductToShoppingCart(self, customerId, productId, quantity):
        if self.checkProcutinCart(customerId, productId):
            query = "UPDATE carts SET quantity = %s where customer_id = %s and product_id = %s"
        else:
            query = "INSERT INTO jlttgrocery.carts (customer_id, product_id, quantity) VALUES (%s, %s, %s)"
        self.execute(query, [customerId, productId, quantity])