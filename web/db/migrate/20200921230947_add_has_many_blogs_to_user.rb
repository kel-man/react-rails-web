class AddHasManyBlogsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :user_id, :bigint, index: true
  end
end
