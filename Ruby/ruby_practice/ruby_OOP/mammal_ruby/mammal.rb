puts "I am the mammal file"

class Mammal
    attr_reader :health
    def initialize
        @health = 150

    end
    def display_health
        puts "This mammal has #{@health} health."
        self
    end
    # def pet
    #     @health += 5
    #     self
    # end
    # def walk
    #     @health -= 1
    #     self
    # end
    # def run
    #     @health -= 10
    #     self
    # end
    #accidentally put it all in mammal however it still works because dog inherits from mammal
end
