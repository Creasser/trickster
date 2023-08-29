class User < ApplicationRecord
    has_secure_password
    validates :username, uniqueness: true, presence: true, length: {8..20}
    validates :email, uniqueness: true, presence: true
end
