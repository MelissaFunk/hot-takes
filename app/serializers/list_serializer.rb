class ListSerializer < ActiveModel::Serializer
  attributes :id, :top5, :likes, :user_id, :category_id
end
