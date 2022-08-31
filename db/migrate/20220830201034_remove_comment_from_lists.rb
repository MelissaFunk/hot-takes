class RemoveCommentFromLists < ActiveRecord::Migration[7.0]
  def change
    remove_column :lists, :comments, :string
  end
end
