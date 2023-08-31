class User < ApplicationRecord
    has_many :goals
    has_many :tricks, through: :goals
    has_secure_password
    validates :username, uniqueness: true, presence: true, length: {in: 8..20}
    validates :email, uniqueness: true, presence: true
end
