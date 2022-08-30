class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category

  has_many :lists
end
