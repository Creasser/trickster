class Goal < ApplicationRecord
    belongs_to :user
    belongs_to :trick
    has_one :category, through: :trick
end
