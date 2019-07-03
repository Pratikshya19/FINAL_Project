class ItemsController < ApplicationController
  skip_before_action :check_authentication

  
def index
        @items = Item.all
        render json: @items
      end
  
      def show
          @item = Item.find(params[:id])
          render json: @item
      end
  
#   def add_to_cart
#         @item = Item.find(params[:id])
#         current_cart << @item.id
#         render :index
#   end

end
