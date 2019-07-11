class CategoriesController < ApplicationController

    skip_before_action :check_authentication


    def index
        @categories = Category.all
        render json: @categories
end

    def show
        @category = Category.find(params[:id])
        @items = Item.all
        
        render json: @category 
    end


end
