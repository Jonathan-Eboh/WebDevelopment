class Bike(object):
    def __init__(self, price,max_speed,miles=0):

        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        print self.price, self.max_speed, self.miles
        return self

    def ride(self):
        print "Riding"
        self.miles += 10 #if you want to alter the class variable be sure to access and chage that variable and not the instance variable
        print self.miles
        return self



    def reverse(self):
        print "Reversing"
        if self.miles >= 5:
            self.miles -= 5
            return self
        else:
            print "You cant have negative miles!"
            return self

bike1 = Bike(100,20,60)
bike1.ride().ride().ride().reverse().displayInfo()

bike2 = Bike(200,30,0)
bike2.ride().ride().reverse().reverse().displayInfo()

bike3 = Bike(150,25,0)
bike3.reverse().reverse().reverse().displayInfo()
