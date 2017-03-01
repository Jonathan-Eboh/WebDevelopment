# Create a new class called  Bike with the following properties/attributes:
#
# price
# max_speed
# miles
# Create 3 instances of the Bike class.
#
# Use the __init__() function to specify the price and max_speed of each instance (e.g. bike1 = Bike(200, "25mph"); In the __init__() also write the code so that the initial miles is set to be 0 whenever a new instance is created.
#
# Add the following functions to this class:
#
# displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
# ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
# reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
# Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().
#
# What would you do to prevent the instance from having negative miles?



class Bike(object):
    def __init__(self, price,max_speed,miles=0):

        self.price = price
        self.max_speed = max_speed
        self.miles = miles

    def displayInfo(self):
        return self.price, self.max_speed, self.miles

    def ride(self):
        print "Riding"
        self.miles += 10 #if you want to alter the class variable be sure to access and chage that variable and not the instance variable
        print self.miles
        return self.miles



    def reverse(self):
        print "Reversing"
        if self.miles >= 5:
            self.miles -= 5
            return
        else:
            print "You cant have negative miles!"
            return




bike1 = Bike(100,20,60)
print bike1.displayInfo()
# for i in range(3):
#     bike1.ride()
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
print bike1.displayInfo()

bike2 = Bike(200,30,0)
print bike2.displayInfo()
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
print bike2.displayInfo()

bike3 = Bike(150,25) #Zero is default arg here
print bike3.displayInfo()
bike3.reverse()
bike3.reverse()
bike3.reverse()
print bike3.displayInfo()
