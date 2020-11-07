class AddBioToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :bio, :string, null: false, default: "Add a bio!"
  end
end
