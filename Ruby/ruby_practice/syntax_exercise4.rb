x = 1

if x > 2
    puts "x is greater than 2"
elsif x < 2 and x >0
    puts "x is 1"
else
    puts "I can't guess the number"
end
#The code runs the same way if you include () around the coditionals
if (x > 2)
    puts "x is greater than 2"
elsif (x < 2 and x >0)
    puts "x is 1"
else
    puts "I can't guess the number"
end

y = 5
puts "y is not 2" if y != 2
puts "y is greater than 2" if y > 2

puts "y is still not 2" unless x == 2

# putting $ in front of a variable in ruby will make it a global variable

age = 5
case age
when 0..2
    puts "baby"
when 3..6
    puts "little child"
when 7..12
    puts "child"
when 13..18
    puts "youth"
else
    puts "adult"
end
