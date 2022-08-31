class ListSerializer < ActiveModel::Serializer
  attributes :id, :num1, :num2, :num3, :num4, :num5, :likes, :user_id, :category_id, :username
  belongs_to :category
  belongs_to :user

  def username
    self.object.user.username
  end
end
