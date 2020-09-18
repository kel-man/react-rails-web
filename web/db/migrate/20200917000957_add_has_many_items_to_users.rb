class AddHasManyItemsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :user_id, :bigint, index: true
  end
end
