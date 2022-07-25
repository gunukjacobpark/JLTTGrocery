class DBHandler:
    def __init__(self):
        # create a connection

    def addUser(self, username, password):
        # INSERT INTO users (username, password) VALUES ('username', 'pw');

    # username -> customer_id -> customer information
    def getCustomer(self, username):
        # SELECT c.* FROM CUSTOMER as c JOIN USER as u ON c.id = u.id WHERE u.username = username
        # customer_id, name, address, phone, email

    def updateCustomer(self, customer):
        # UPDATE CUSTOMER SET address = customer.address, ... WHERE id = customerId

    def addCustomer(self, customer):
        # INSERT INTO CUSTOMER (customer_name, address, ...) VALUES( )
        # INSERT INTO SHOPPING_CART (customer_id, products) values (customer_id, [])

    def updateProductToShoppingCart(self, customerId, products, quantity):
        # UPDATE CUSTOMER SET products = products where