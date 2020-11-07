class AddTitleAndContentsToBlogs < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :title, :string
    add_column :blogs, :contents, :string
  end
end
