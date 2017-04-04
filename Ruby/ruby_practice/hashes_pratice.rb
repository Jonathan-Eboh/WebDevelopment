x = {"first_name" => "Learning", "last_name" => "Programming"}
puts x["first_name"], x["last_name"]
puts "Your last name is Programming" if x["last_name"].eql? "Programming"

y = {:first_name => "Learning", :last_name => "Programming"}
puts "Y is ", y
puts y[:first_name], y[:last_name]

puts "DELETING :first_name"
y.delete(:first_name)
puts "Y is now", y

if y.has_key? :first_name
    puts "Y has a kew called :first_name"
else
    puts "Y does not have a key called :first_name"
end

if y.has_value? "Programming"
    puts "Y has a value called Programming"
else
    puts "Y does not have a value called Programming"
end

if y.empty?
    puts "The Y hash is empty"
else
    puts "The Y hash is not empty"
end

our_hash = {first_name: "Jon", last_name: "Eboh"}
puts our_hash[:first_name], our_hash[:last_name]
#Note how in the example above we must still put the colon in the front when calling the hash value by keyname. The syntax of putting the colon at the end of the keyname is just syntactic sugar
