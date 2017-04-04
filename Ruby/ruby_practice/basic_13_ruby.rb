#Print all the values between 1-255---------1
# puts (1..255).each {|i| print i}

#Print out only the odd numbers in that range----2
# puts (1..255).each {|i| print i if i % 2 == 1}

#Print out the sum of the numbers between 0 and 255---------3
# puts (0..255).each {|i| print sum +=i}
# puts (0..255).inject(:+)#This is the ruby-est way to do it so far

# sum = 0 #This has to live outside the block
# 0.upto(255).each {|i| puts "New number:#{i} Sum #{sum += i}"} #This is how you do it with the stipulaiton

# Iterating through and array and printing every value-----------4
x = [-1,1,3,5,-4,7,9,13]

# x.each {|i| puts i}

#Find max in array-----------5

# puts x.max

#Find average in array----------6
# puts x.inject(:+) / x.size.to_f

#Write a program that creates an array 'y' that contains all the odd numbers between 1 to 255. When the program is done, 'y' should have the value of [1, 3, 5, 7, ... 255].--------7
# y = []
# (0..255).each {|i| y.push(i) if i % 2 == 1 }
# puts y

# y = 5
# puts x.count {|elem| elem > y}

#Square all the values in an array-----------8

# puts x.map {|i| i * i}

#Eliminate all negavtive values in an array-----------9
# puts x.each_index {|i| x[i] = 0 if x[i] < 0}

# Given any array x, say [1, 5, 10, -2], create an algorithm that returns a hash with the maximum number in the array, the minimum value in the array, and the average of the values in the array.---------10

# hash = {max: x.max, min: x.min, avg: x.reduce(:+)/ x.length.to_f}
# puts hash


# Given any array x, say [1, 5, 10, 7, -2], create an algorithm that shifts each number by one to the front. For example, when the program is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0].------------11

# x.rotate!(1)[x.length-1] = 0 #Need the !(bang) to ensure that the rotated array is saved
# puts x

# Write a program that takes an array of numbers and replaces any negative number with the string 'Dojo'. For example, if array x is initially [-1, -3, 2] after your program is done that array should be ['Dojo', 'Dojo', 2].

# puts x.each_index {|i| x[i] = "Dojo" if x[i] < 0}
