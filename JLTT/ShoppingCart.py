class ShoppingCart:
    def __init__(self):
        self.products = {}  # { Product1: quantity, Product2: quantity }
        self.subtotal = 0.0

    def addProduct(self, product):
        self.products[product] = 1

    def removeProduct(self, product):
        del self.products[product]

    def updateProductQuantity(self, product, quantity):
        if quantity < 1:
            self.removeProduct(product)
        else:
            self.products[product] = quantity

    def updateSubTotal(self):
        newSubTotal = 0.0
        for product in self.products:
            newSubTotal += product.price * float(self.products[product])

        self.subtotal = newSubTotal

    def clear(self):
        self.products = {}
        self.subtotal = 0.0

    def getSubTotal(self):
        self.updateSubTotal()
        return self.subtotal

