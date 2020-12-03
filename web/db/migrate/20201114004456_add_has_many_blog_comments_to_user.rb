class AddHasManyBlogCommentsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :blog_comments, :user_id, :bigint, index: true
  end
end
