def hello_world #we use snake case in Ruby. This means that the names are always lowercased and separated by an underscore. Parenthesis are optional in Ruby.
    puts "Hello world"
end
hello_world

def say_hello name1, name2
    puts "hello, #{name1} and #{name2}"
end
say_hello "Frank","Tom"

#We can pass parameters into a function the same way we would in any other language. For a function with a lot of parameters, feel free to use parenthesis for readability.
def group_greeting (name1, name2, name3, name4, name5)
    puts "hello group, #{name1} and #{name2} and #{name3} and #{name4} and #{name5}"
end
group_greeting "Frank","Tom","Larry","Bill","Susan"

#default parameters
def say_hello_2 name1="Tom", name2="Jerry"
  puts "hello, #{name1} and #{name2}"
end
say_hello_2 "Ted"

#In Ruby, we don't always need to specify what we are returning with the return keyword. By default, Ruby will return whatever was evaluated last.

def say_hello_3 name1="Bill", name2="Ted"
  "hello, #{name1} and #{name2}"
end
puts say_hello_3 nil, "edd" # How to envoke the first default argument?


def say_hello_4 name1, name2
  if name1.empty? or name2.empty?
    return "Who are you?!"
  end
  # Doesn't reach the last line because we used return
  "hello, #{name1} and #{name2}"
end
puts say_hello_4 "", ""
puts say_hello_4 "Papa", "John"
