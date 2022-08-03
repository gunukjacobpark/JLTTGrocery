from Customer import Customer
from DBHandler import DBHandler

# Once customer info found in DB and successfully logged in
class JLTTGrocery:
    def __init__(self):
        self.customer = None
        self.products = None

    def login(self, username, password):
        # if passed
        if DBHandler.checkCredential():
            self.customer = self.loadCustomerInfo(username)
            self.products = self.loadProducts()

    def loadCustomerInfo(self, username):
        customer_id, name, address, phone, email = DBHandler.getCustomer(username)
        customer = Customer(customer_id, name)
        customer.setAddress(address)
        customer.setPhone(phone)
        customer.setEmail(email)
        return customer

    def loadProducts(self):
        return DBHandler.getProducts()

    def getProductById(self, productId):
        for product in self.products:
            if product.getProductId() == productId:
                return product

    def getProductsByName(self, productName):
        products = []
        for product in self.products:
            if productName.lower() in product.getName().lower():
                products.append(product)
        return products

    def addProductToShoppingCart(self, product):
        self.shoppingCart.updateProductQuantity(product,1)

    def updateProductInShopingCart(self, product, quantity):
        self.shoppingCart.updateProductQuantity(product, quantity)

    def checkout(self):
        self.shoppingCart.clear()
