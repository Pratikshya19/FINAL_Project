class Customer < ApplicationRecord
    has_secure_password
    

    has_many :purchases
    has_many :items, through: :purchases

    has_one :shopping_cart

    validates :name, presence: true
    validates :email, confirmation: true, uniqueness: true, presence: true

    after_create_commit :create_shopping_cart

    def create_shopping_cart
        ShoppingCart.create(customer_id: self.id)
    end
end
