class Item < ApplicationRecord
    has_many :purchases
    has_many :customers, through: :purchases

    has_many :cart_items
    has_many :shopping_carts, through: :cart_items

    belongs_to :category
    
end

