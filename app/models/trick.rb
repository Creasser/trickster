class Trick < ApplicationRecord
    has_many :goals
    has_many :users, through: :goals
    validates :title, uniqueness: true, 
    validates :difficulty, greater_than_or_equal_to: 0, less_than_or_equal_to: 5
end