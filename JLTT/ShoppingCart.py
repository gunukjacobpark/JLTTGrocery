class ShoppingCart:
    def __init__(self):
        self.products = {} # { Product1: quantity, Product2: quantity }
        self.subtotal = 0.0

    def addProduct(self, product):

    def updateProductQuantity(self, product, quantity):
        if quantity < 1:
            #Delete product from self.products
        else:
            #change quantity

        self.updateSubTotal()

    def updateSubTotal(self):
        newSubTotal = 0.0
        for product in self.products:
            newSubTotal += product.price * float(self.products[product])

        self.subtotal = newSubTotal









