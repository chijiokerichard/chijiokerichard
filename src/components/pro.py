# print(1)

class store:
    def __init__(self):
        self.cart={
            'rice':{'price':30,'qty':2},
            'beans':{'price':100,'qty':8},
            'egg':{'price':50,'qty':4},
        },
        self.paid=False


    def make_another_choice(self):
        choice = input('1)reduce the quantity\n2)buy another produce\nmake your choice: ')
        intChoice = int(choice)
        if intChoice == 1:
            self.q()
        else:
            self.showCart()

    
    def q(self):
        qty=input('Enter quantity: ')
        cqty = int(qty)
        if cqty <=self.iqty:
           self.total_price=cqty*self.iprice
           print(f'total price of {self.name} for {cqty} quantity is:\ntotal={self.total_price}')
        else:
            print(f'sorry we only have {self.iqty} remaining in our store')
            print(f'reduce the quantity or buy another product')
            self.make_another_choice()


    def showCart(self):
        self.name=input('what do you want: ')
        for item in self.cart:
            if self.name in item:
                self.iname=item[str(self.name)]
                self.iqty=item[str(self.name)]['qty']
                self.iprice=item[str(self.name)]['price']
            
                self.have=f'we found name={self.name} price={self.iprice} quantity={self.iqty} '
                print(self.have)
                self.q()
            else:
                print('No! product found to match '+self.name)
                print('Here is our products list in the store')
                for p in self.cart:
                    print(p,end='')
                    print('\n')
                    self.showCart()





out=store()
out.showCart()