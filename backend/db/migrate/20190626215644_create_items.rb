class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :artist
      t.float :price
      t.string :description
      t.integer :category_id
      t.string :image_url

      t.timestamps
    end
  end
end
