# class User
# end
# user1 = User.new
# user2 = User.new
# puts user1 == user2

#------------------------------------------------------
#The above class is empty

# class User
#     @first_name
# end
# user1 = User.new
# user2 = User.new
# user1.first_name = "Matz"

#------------------------------------------------------
#The above class is no longer empty but will throw us an error

# class User
#     def first_name=(val)
#         @first_name = val
#     end
# end
# user1 = User.new
# user1.first_name = "Matz"
# puts user1.inspect
# puts user1.first_name


#------------------------------------------------------
#The method below is the correct to make a class in ruby


class User
  attr_accessor :first_name, :last_name
  def initialize(f_name, l_name)
    @first_name = f_name
    @last_name = l_name
  end
end
steph = User.new("Stephen", "Curry")

class CodingDojo
    #Why doesnt this need attr_accessor?
  @@no_of_branches = 0
  def initialize(id, name, address)
    @branch_id = id
    @branch_name = name
    @branch_address = address
    @@no_of_branches += 1
    puts "Created branch #{@@no_of_branches}"
  end
  def hello
    puts "Hello CodingDojo!"
  end
  def display_all
    puts "Branch ID: #{@branch_id}"
    puts "Branch Name: {@branch_name}"
    puts "Branch Address: #{@branch_address}"
  end
end
# now using above class to create objects
branch = CodingDojo.new(253, "SF CodingDojo", "Sunnyvale CA")
branch.display_all
branch2 = CodingDojo.new(155, "Boston CodingDojo", "Boston MA")
branch2.display_all
