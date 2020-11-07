class AddHasOneProfileToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :user_id, :bigint, index: true
  end
end
