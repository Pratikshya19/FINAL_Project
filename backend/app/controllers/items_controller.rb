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

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  

end
