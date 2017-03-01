class Animal(object):
    """docstring for ."""
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -= 5
        return self

    def displayHealth(self):
        print self.name, self.health
        return self

animal = Animal("Tom")
animal.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self,name):
        super(Dog, self).__init__(name) # Careful on the sintax here make sure the child class has the correct attribute names to plug into the call of the parents __init__
        self.health = 150 #Ask Amy about why we need to have the child class have its own name value in its __init__ function

    def pet(self):
        self.health += 5
        return self
Dog = Dog("ted").walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return self

    def displayHealth(self):
        print "This is a dragon"
        super(Dragon, self).displayHealth() #overloads the parent function's displayHealth() ask to make sure this is what is happening

Drake = Dragon("Drake").walk().walk().walk().run().run().fly().fly().displayHealth()
