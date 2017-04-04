def test
    puts "You are in the method"
    yield
    puts "You are back in the method"
    yield
end
test {puts "You are in the yield block"}

def test_2
    yield(5)
    puts "You are in the method test"
    yield(100)
end
test_2 {|i| puts "You are in the yield block #{i}"}#This is not a loop it simply grabs the current arugment passed into yield


def square(num)
    puts "num is #{num}"
    puts "yield(num) has a value of #{yield(num)}"#Blocks can return values so yield num can return 25 here
end

# square(5) do |i|
#     i*i
# end
square(5){|i| i*i}


def square_2(num)
    puts "num is #{num}"

    x = yield(num)#Again its important to remeber that yield blocks can return values so this return 25
    puts "x has a value of #{x}"

    y = yield(num)*x# this will end up being 25 * 25
    puts "y ha a value of #{y}"

end
square_2(5) {|i| i * i}
