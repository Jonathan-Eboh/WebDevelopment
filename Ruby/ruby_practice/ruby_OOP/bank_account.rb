


class BankAccount
  # your code here
  attr_reader :acc_num

  def initialize
      @acc_num = rand.to_s[2..10] 

  end
end
