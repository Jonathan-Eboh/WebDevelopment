x = [3,5,1,2,7,9,8,13,25,32]

sum = 0
x.each {|i| puts "New number:#{i} Sum #{sum += i}"}

def less_than_10 arr
    puts "The numbers greater than 10 are: ", arr.find_all {|i| i > 10}
end

less_than_10 x
# ------------------------------------------------------------------
y = %w{John KB Oliver Cory Matthew Christopher}
puts "array y shuffled is: " ,y.shuffle

def longer_than_5 arr
    puts "The names that are longer than five letters long are: ", arr.find_all {|i| i.length > 5}
end

longer_than_5 y
# ------------------------------------------------------------------

# alpha= []
puts ('a'..'z').to_a.to_s
puts ('a'..'z').to_a.shuffle.to_s #.shuffle needs to be called on an array so we much utilize that method before we use .to_s
puts ('a'..'z').to_a.shuffle.last.to_s #In ruby the last thing executed is return by defualt so when we use .first and .last we dont see the shuffled array itself only the first and last value of the array respectifly. Futhermore each envocation of .shuffle creates a new indepent shuffled array so .first and .last arnt pulling from the same source
puts ('a'..'z').to_a.shuffle.first.to_s

('a'..'z').each {|i| puts "#{i} is a vowel" if i =~ /[aeiou]/} #this utilizes regular expressions in ruby =~ /[aeiou]/
# ------------------------------------------------------------------

rand_arr = []
# count = 0
# while count < 10
# rand_arr.push(rand(55..100))
# count +=1
# end
# print Array.new(10) { rand(55..100) } #These both work, me using puts was the issue
10.times { rand_arr << rand(55..100)}
# print rand_arr

# ------------------------------------------------------------------
rand_arr_2 = []
# count = 0
# while count < 10
# rand_arr.push(rand(55..100))
# count +=1
# end
# print Array.new(10) { rand(55..100) } #These both work, me using puts was the issue
10.times { rand_arr_2 << rand(55..100)}
print rand_arr_2.sort
puts rand_arr_2.sort.min
puts rand_arr_2.sort.max

# ------------------------------------------------------------------
string = (0...50).map { ('a'..'z').to_a[rand(26)] }.join
puts string

#Two differnt ways to do this
o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
string_2 = (0...50).map { o[rand(o.length)] }.join

puts string_2

# ------------------------------------------------------------------
rand_string_arr = []
10.times {rand_string_arr << (0...50).map { ('a'..'z').to_a[rand(26)] }.join}

print rand_string_arr
