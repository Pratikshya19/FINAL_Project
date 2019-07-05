class PurchasesController < ApplicationController
  before_action :check_authentication

  def index
    @purchases = Purchase.all
    render json: @purchases
  end

    def show
        @purchase = Purchase.find(params[:id])
        render json: @purchase
      end
  
      def create
        @purchase = Purchase.create(purchase_params)
      render json: @purchase
      end

      def review
        @purchase = Purchase.find(params[:id])
        render json: @purchases
      end
  


      private
      def purchase_params
        params.permit(:review, :item_id,:customer_id)
      end

   end
