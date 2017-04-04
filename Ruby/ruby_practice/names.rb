a = {first_name: "Michael", last_name: "Choi"}
b = {first_name: "John", last_name: "Doe"}
c = {first_name: "Jane", last_name: "Doe"}
d = {first_name: "James", last_name: "Smith"}
e = {first_name: "Jennifer", last_name: "Smith"}
names_arr = [a, b, c, d, e]

def names arr
    puts "You have #{arr.length} names in the 'names' array they are:"

    arr.each_index {|i| puts "The name is", arr[i][:first_name], arr[i][:last_name] }

end

# names names_arr

def names_2 arr
    puts "You have #{arr.length} names in the 'names' array they are:"

    arr.each_index {|i| puts "The name is, '#{arr[i][:first_name]} #{arr[i][:last_name]}'" }

end

names_2 names_arr
puts names_arr.object_id #This changes everytime I run the program
puts Class.superclass
