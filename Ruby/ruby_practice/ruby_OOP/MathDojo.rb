class MathDojo
    attr_reader :answer
    #Note that the above line is a READER

    def initialize
        #Note initialize does not HAVE to take any arguments
        @answer = 0
    end
    def add *nums
        @answer += nums.flatten.reduce(0,:+)
        #How does the above line produce a two dimensional array?
        self
    end

    def subtract *nums
        @answer -= nums.flatten.reduce(0,:+)
        self
    end
end

challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).answer # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).answer # => 23.15
puts challenge1
puts challenge2
