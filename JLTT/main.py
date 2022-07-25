from Customer import Customer

# Once customer info found in DB and successfully logged in
class JLTTGrocery:
    def __init__(self):
        self.customer

    def loadCustomer(self, customer_id, name, address, phone, email):
        customer = Customer(customer_id, name)
        customer.setAddress(address)
        customer.setPhone(phone)
        customer.setEmail(email)
        self.customer = customer

    def addProductToShoppingCart(self, product):
        self.shoppingCart.updateProductQuantity(product,1)

    def checkout(self):
        # self.customer.getShoppingCart()