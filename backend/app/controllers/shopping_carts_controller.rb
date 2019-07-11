class ShoppingCartsController < ApplicationController
    skip_before_action :check_authentication, only: [:show]



    
    def show
        @shopping_cart = ShoppingCart.find(params[:id])
        @cart_items = @shopping_cart.cart_items
        render json: {shopping_cart: @shopping_cart, cart_items: @cart_items}
    end


    # def show_cart
    #     @total_price = 0.0
    #     @cartItem = CartItem.find
    #   end
end
