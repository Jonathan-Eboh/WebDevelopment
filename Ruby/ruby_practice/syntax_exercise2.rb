x = 5
y = 10
z = x + y

puts z
a = 1; b = 10; c = a + b
puts c

first_name = "Jon"
last_name = "Eboh"

puts "Your name is "
puts first_name
puts last_name

puts "Your name is ", first_name, last_name
#use + to get rid of the new line
puts "Your name is " + first_name +" "+ last_name

puts "Your first name is #{first_name} and last name is #{last_name}"

puts "Your first name is %s and last name is %s"  %[first_name, last_name]

z = 50
puts "Value of z is #{z}"
puts "Value of z is %d" %[z]
puts "Value of z is %d" % z

puts "\t\tI am\n 5'10\" tall"
#puts always returns nil
