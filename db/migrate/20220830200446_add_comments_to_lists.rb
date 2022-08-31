class AddCommentsToLists < ActiveRecord::Migration[7.0]
  def change
    add_column :lists, :comments, :string
  end
end
