class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :topic
      t.string :contents

      t.timestamps
    end
  end
end
