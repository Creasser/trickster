class Trick < ApplicationRecord
    has_many :goals, dependent: :destroy
    has_many :users, through: :goals
    belongs_to :category
    validates :title, uniqueness: true 
    #validates :difficulty, greater_than_or_equal_to: 0, less_than_or_equal_to: 5
end
