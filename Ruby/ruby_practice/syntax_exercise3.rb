x = "Learning Programming"

puts x
puts x.length
puts x.class
puts x.capitalize
puts x.upcase
puts x.downcase

puts x[2]
puts x.include?("Programming") #this is case sensative, will return true
puts x.include?("programming") #this is case sensative, will return false

puts "This string has the substring 'Programming'" if x.include?("Programming") #These two....
puts "This string has the substring 'Programming'" if x.include? "Programming" #Work the same way.

y = "John, charles, matt, joe"
#split separates elements in the string over a specific delimiter
puts y.split(",") #prints out the output as discrete values on a new line
puts y.split(",").to_s #prints out the values as an array of strings

z = ""

puts "Z is empty" if z.empty?

=begin
Using the quotations is just syntactic sugar for instantiating an instance of a String. We can create a String this way:

String.new("I am an instance of the String class")

=end

puts String.new("I am an instance of the String class")
puts String.new("I am also an instance of the String class")
#NOTE we cannot preform string interpolation on single quotes!!!

puts "24 plus 8 is #{24 + 8}" # 24 plus 8 is 32
puts '24 plus 8 is #{24 + 8}'# 24 plus 8 is #{24 + 8}
puts "24 plus 8 is" + (24 + 8).to_s#24 plus 8 is32 because there is no space between the is and (24 + 8).to_s

=begin
In most programming languages, primitive datatypes like integers and strings are immutable. In Ruby, however, strings are actually mutable. Let's look at an example:

str = "bar"
str[0] = "c"
puts str # => "car"
Copy
Now, with methods that appear to change the value of the string, they will return a shallow copy of the string unless we have a bang (exclamation point) attached to the end of the method name.

word = "hello"
word.capitalize # => "Hello"
puts word # => "hello"
word.capitalize! # => "Hello"
puts word # => "Hello"
Copy
Notice that when we invoked the capitalize method, it returns a copy of the string with the first letter capitalized but it doesn't actually update the original string. If you want to change the value of the original string, you must attach the bang.
=end
