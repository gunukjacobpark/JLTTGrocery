class Product:
    def __init__(self, product_id, category, name, price, description):
        self.product_id = product_id
        self.category = category
        self.name = name
        self.price = price
        self.description = description

    def setProductId(self, product_id):
        self.product_id = product_id

    def getProductId(self):
        return self.product_id

    def setCategory(self, category):
        self.category = category

    def getCategory(self):
        return self.category

    def setName(self, name):
        self.name = name

    def getName(self):
        return self.name

    def setPrice(self, price):
        self.price = price

    def getPrice(self):
        return self.price

    def setDescription(self, description):
        self.description = description

    def getDescription(self):
        return self.description

