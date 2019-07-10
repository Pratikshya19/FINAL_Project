class CartItemsController < ApplicationController
    skip_before_action :check_authentication
    before_action :cart_item_params, only: [:create]
    
    def index
        @cart_items = CartItem.all
       
        render json: @cart_items
    end

    def create
      # byebug
      @customer = Customer.find(params[:customer_id])
      @shopping_cart = @customer.shopping_cart
      @cart_item = CartItem.create(shopping_cart_id: @shopping_cart.id, item_id: params[:item_id])
    render json: @cart_item 
    end

    
def show
    @cart_item = CartItem.find(params[:id])
   
    render json: @cart_item 
end

# def addtocart
#   @customer = Customer.find(params[:customer_id])
#   @shopping_cart = @customer.shopping_cart
#   @cart_item = CartItem.find(shopping_cart_id: @shopping_cart.id, item_id: params[:item_id])
# end

def delete
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render json: { status: 200, msg: "Item has been deleted." }
  end

private
def cart_item_params
params.require(:cart_item).permit(:item_id, :shopping_cart_id)
end

end