puts 'I am in the lion file'
require_relative 'mammal'

class Lion < Mammal
    def initialize
        @health = 170
    end
    def display_health
        puts "This is a lion"
        super
        #The super here allows the lion to grab its own health value because the super here overrides the parent function
        #The function is read and executed line by line so first the local funtion display_health is parsed and executed and puts "This is a lion" is printed then the code hits super and runs the parents display_health function
        self
    end
    def fly
        @health -= 10
        self
    end
    def attack_town
        @health += 50
        self
    end
    def eat_humans
        @health += 20
        self
    end
end

lion1 = Lion.new
lion1.display_health
lion1.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.fly.display_health
