class Category < ApplicationRecord
  has_many :lists
  has_many :comments, through: :lists
end
