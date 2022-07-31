from ShopingCart import ShoppingCart


class Customer:
    def __init__(self, customer_id, name):
        self.id = customer_id
        self.name = name
        self.address = ""
        self.phone = ""
        self.email = ""
        self.shoppingCart = None

    def getId(self):
        return self.id

    def setName(self, name):
        self.name = name

    def getName(self):
        return self.name

    def setAddress(self, address):
        self.address = address

    def getAddress(self):
        return self.address

    def setPhone(self, phone):
        self.phone = phone

    def getPhone(self):
        return self.phone

    def setEmail(self, email):
        self.email = email

    def getEmail(self):
        return self.email

    def setShoppingCart(self, shoppingCart):
        self.shoppingCart = shoppingCart

    def getShoppingCart(self):
        return self.shoppingCart

