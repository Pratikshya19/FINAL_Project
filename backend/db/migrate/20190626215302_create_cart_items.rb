class CreateCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_items do |t|
      t.integer :shopping_cart_id
      t.integer :item_id
      t.timestamps
    end
  end
end
 
#numberofitems