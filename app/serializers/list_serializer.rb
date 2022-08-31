class ListSerializer < ActiveModel::Serializer
  attributes :id, :num1, :num2, :num3, :num4, :num5, :likes, :user_id, :category_id
  belongs_to :category
  belongs_to :user
end
