class CartItemsController < ApplicationController
    skip_before_action :check_authentication
    
    def index
        @cart_items = Cart_Item.all
        render json: @cart_items
    end

    def create
      @cart_item = Cart_Item.create(cart_item_params)
    render json: @cart_item 
    end

def show
    @cart_item = Cart_Item.find(params[:id])
    render json: @cart_item 
end

# def update
#   @cart = Cart.find(cart_item_params)
# byebug

# end



def delete
    @cart_item = Cart_Item.find(params[:id])
    @cart_item.destroy
    render json: { status: 200, msg: "Item has been deleted." }
  end

private
def cart_item_params
params.permit(:item_id, :shopping_cart_id)
end

end