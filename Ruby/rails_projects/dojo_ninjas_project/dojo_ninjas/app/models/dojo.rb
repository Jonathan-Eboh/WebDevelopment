class Dojo < ApplicationRecord
    #This assures that a dojo can have many ninjas
    #The addition of the dependent: :destroy portion makes it so if we delete the any given dojo then it will automatically removes any ninjas associated with that dojo
    has_many :ninjas, dependent: :destroy
    #The requested validations:
    #require the presence of name city and state
    validates :name, :city, :state, presence: true
    #This next validation SPECIFICALLY requires that the state IS two letters long
    validates :state, length: { is: 2 }
end
