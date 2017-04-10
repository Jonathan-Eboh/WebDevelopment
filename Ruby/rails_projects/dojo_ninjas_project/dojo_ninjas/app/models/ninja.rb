class Ninja < ApplicationRecord
  belongs_to :dojo
  #This assures that any given ninja has a first as well as last name
  validates :first_name, :last_name, presence: true
end
