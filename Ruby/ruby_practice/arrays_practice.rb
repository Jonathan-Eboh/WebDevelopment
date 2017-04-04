 a = ["Matz","Guido", "Program","Larry","John"]
 b = [5,6,9,3,1,2,4,7,8,10]
 c = ["Program", 9]
 d = %w{cat dog bear 7} #another way of making an array with values
 #returns the value at the specified index (using an index 0 system)
 puts a[0]
 puts a[1]

x = (a+b) - c
puts x.to_s

puts b.class

puts a.shuffle.join('-')

puts a
a.delete("Program")
puts a

puts b.fetch(0)
puts b.at(0)
puts b.sort
puts a.reverse
puts a.length
puts a.slice(0..2) #in ruby the .slice method is inclusive of the last value
puts b.length
puts b.insert(11,11) #Insert the second value before the index specified by the first value. if you put the last value it will insert it at the end of the array. If you put a value beyond the last value of the array it will insert it at that value and all the value inbetween the last value of the array and the specified value given will be nil
puts "this is the value at the 10th index of b", b[10].class
puts d

#Iterators-----------------------------------------------------------------------------------
puts a.any? { |word| word.length >=3  } #true
puts a.each { |word|  print word, "--"  } #why does it print out the rest of the list aftwards?
puts (1..b.length).collect { |i|  i * i}
puts (1..100).detect { |i|  i %5 == 0 and i % 7 == 0 } #35
puts (1..10).find_all {|i| i % 3 == 0}# 3, 6, 9
puts (1..10).reject {|i| i % 3 == 0}
# 5.upto(15) {|i| print i, "-"}

#Range---------------------------------------------------------------------------------------
puts (1..5).include?(4)
puts (1..5).last
puts (1..5).max #When is this not the last value?
puts (1..5).min #And when is this not the first value?
y = ("a".."z")
puts y.to_a.to_s
puts y.to_a.shuffle.to_s
puts y.include?("h")
