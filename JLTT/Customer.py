from ShoppingCart import ShoppingCart


class Customer:
    def __init__(self, customer_id, name):
        self.id = customer_id
        self.name = name
        self.address = ""
        self.phone = ""
        self.email = ""
        self.shoppingCart = ShoppingCart()

    def setAddress(self, newAddress):
        self.address = newAddress

    def getAddress(self):
        return self.address

    def setPhone(self):

    def getPhone(self):

    def setEmail(self):

    def getEmail(self):

    def getShoppingCart(self):
        return self.shoppingCart





