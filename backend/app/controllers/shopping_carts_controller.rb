class ShoppingCartsController < ApplicationController



    def show
        @shopping_cart = ShoppingCart.find(params[:id])
        render json: @shopping_cart
    end



    def show_cart
        @total_price = 0.0
      end
end
