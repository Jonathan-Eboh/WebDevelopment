$i = 0
$num = 5
begin
    puts("Inside the loop i = #{$i}")
    puts "$i is not 3" unless $i==3

    $i += 1

end while $i < $num

for i in 0..5
    puts "Value of local variable is #{i}"
    puts "i is now 3!!!" if i==3
end

#Both the syntax below as well as the syntax above are acceptable
i = 0
num = 5
while i < num do
    puts "(2nd loop) Inside the loop i = #{i}"
    i += 1
end

i = 0
num = 5
while i < num do
    puts "(3rd loop) Inside the loop i = #{i}"
    i += 1
    puts "This loop will break when i == 2"
    break if i == 2
end

for i in 0..5
    next if i == 2 #This just skips the rest of the code for the current iteration so this code will skip the rest of the interation if i == 2
    puts "Value of local variable is #{i}"
    # puts "i is now 3!!!" if i==3
end
