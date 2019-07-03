class PurchasesController < ApplicationController

    def show
        @purchase = Purchase.find(params[:id])
        render json: @purchase
      end
  
      def review
        @purchase = Purchase.find(params[:id])
        render json: @purchases
      end
  

   end
