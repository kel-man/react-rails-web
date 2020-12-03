class CreateBlogComments < ActiveRecord::Migration[5.2]
  def change
    create_table :blog_comments do |t|
      t.string :comment
      t.bigint :blog_id, index: true
      t.timestamps
    end
  end
end