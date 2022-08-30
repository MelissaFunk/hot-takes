class User < ApplicationRecord
  has_many :lists

  has_secure_password

  validates :username, :password, presence: true
  validates :username, uniqueness: true
end
