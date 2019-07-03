class CartItemsController < ApplicationController

    def index
        @cart_items = Cart_Item.all
    end

# def show
#     @cart_item = Item.find(params[:id])

end
