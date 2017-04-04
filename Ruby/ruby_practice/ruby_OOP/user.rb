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
