puts 'I am in the dog file'
require_relative 'mammal'

class Dog < Mammal
    def pet
        @health += 5
        self
    end
    def walk
        @health -= 1
        self
    end
    def run
        @health -= 10
        self
    end
end

dog1 = Dog.new
# dog1.display_health
# puts dog1.pet
# puts dog1.walk
# puts dog1.run
# dog1.display_health
# dog1.walk.walk.walk.run.run.pet.display_health
