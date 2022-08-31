class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :lists
  has_many :comments, through: :lists
end
