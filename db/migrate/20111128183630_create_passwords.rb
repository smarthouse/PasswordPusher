class CreatePasswords < ActiveRecord::Migration
  def change
    create_table :passwords do |t|
      t.string :payload
      t.integer :expire_after_time
      t.integer :expire_after_views
      t.boolean :expired, :default => false
      t.string :url_token
      t.timestamps
    end
  end
end
