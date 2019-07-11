class CustomersController < ApplicationController
  skip_before_action :check_authentication, only: [:create, :cart_items, :delete_item]

def index
  customers = Customer.all 
  render json: customers
end


def update
@customer = Customer.find_by(id: customer_params[:id])
end

def show
  customer = Customer.find(params[:id])
  render json: customer
end


def delete_customer
  customer = Customer.find(params[:id])
  customer.destroy
  render json: { status: 200, msg: "Customer has been deleted." }
end


  #sign up
def create
customer = Customer.create(customer_params)
render json: {
  customer: customer,
  token: encode_token({ customer_id: customer.id })
}
end


def profile
    render json: current_customer
 end

def cart_items
  # byebug
  @customer = Customer.find(params[:id])
 @cart = @customer.shopping_cart
 @items = @cart.cart_items.map do |cart_item|  Item.all.find do |item| cart_item.item_id==item.id end 
  end
  render json: {items: @items}
end

def delete_item
  # byebug
  puts "deleting item"
  # byebug
  @customer = Customer.find(params[:customer_id])

  @cart = @customer.shopping_cart
  @cart_item = @cart.cart_items.find_by(item_id: params[:item_id])
  @cart_item.destroy
  render json: { status: 200, msg: "Item has been deleted." }
end


private
def customer_params
  params.permit(:name, :email, :address, :password)
end

end



 

    






