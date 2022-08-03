class ShoppingCart:
    def __init__(self):
        self.products = {}  # { Product1: quantity, Product2: quantity }
        self.subtotal = 0.0

    def addProduct(self, product):
        productId = product.getProductId()
        self.products[productId]["quantity"] = 1
        self.products[productId]["product"] = product

    def removeProduct(self, productId):
        del self.products[productId]

    def updateProductQuantity(self, productId, quantity):
        if quantity < 1:
            self.removeProduct(productId)
        else:
            self.products[productId]["quantity"] = quantity

    def updateSubTotal(self):
        newSubTotal = 0.0
        for productId in self.products.keys():
            newSubTotal += float(self.products[productId]["quantity"]) * self.products[productId]["product"].price
        self.subtotal = newSubTotal

    def clear(self):
        self.products = {}
        self.subtotal = 0.0

    def getSubTotal(self):
        self.updateSubTotal()
        return self.subtotal

