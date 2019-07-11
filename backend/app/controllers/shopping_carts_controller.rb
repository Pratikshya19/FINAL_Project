class ShoppingCartsController < ApplicationController
    skip_before_action :check_authentication, only: [:show]



    
    def show
        @shopping_cart = ShoppingCart.find(params[:id])
        @cart_items = @shopping_cart.cart_items
        render json: {shopping_cart: @shopping_cart, cart_items: @cart_items}
    end


    # def update
    #     @shopping_cart = Shopping_cart.find(params[:id])
    #     @shopping_cart.update(quantity: params[:quantity], customer_id: params[customer_id])
    #     if @order.save
    #       render json: @order, status: :accepted
    #     else
    #       render json: { errors: @order.errors.full_messages }
    #     end
    #   end

    #   private 

    #   def shopping_cart_params
    #     params.permit(:quantity, :product_id, :user_id)
    #   end

end
