def guess_number
    puts "Please enter in a random number between one and five"
    guess = gets.chomp
    number = 1
    # rand(0..1)

    if guess  === number
        puts "you win"
    else
        puts "sorry you lose"
    end
    # puts "Sorry please try again" unless guess == number
    # puts "Wow lucky you your guess of #{guess} was the same as #{number}" if guess == number
end
# guess_number
# puts rand(0..10)
# input = gets.chomp
# puts input


def guess_number_2 guess

    number = rand(0..1)
    if guess == number
        puts "You win!"
    else
        puts "sorry you lose!"
    end

end

# guess_number_2 rand(0..1)


def guess_number_3 guess

    number = rand(0..1)

        puts "You win!" if guess == number

        puts "sorry you lose!" unless guess == number




end

guess_number_3 rand(0..1)
