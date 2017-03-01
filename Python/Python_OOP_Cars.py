class Car(object):

    def __init__(self, price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage

    def display_all(self):
        if self.price > 10000:
            tax = .15
        else:
            tax = .12
        print self.price
        print self.speed
        print self.fuel
        print self.mileage
        print tax
        return


Car1 = Car(9000,150,"Half Full",95)
Car1.display_all()

Car2 = Car(11000,160,"Full",100)
Car2.display_all()

Car3 = Car(2000,170,"Quarter Full",80)
Car3.display_all()

Car4 = Car(20000,120,"Full",125)
Car4.display_all()

Car5 = Car(5000,180,"Full",75)
Car5.display_all()

Car6 = Car(35000,190,"Completely Full",200)
Car6.display_all()
