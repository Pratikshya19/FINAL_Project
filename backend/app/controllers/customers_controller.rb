class CustomersController < ApplicationController
  skip_before_action :check_authentication, only: [:create]

  def show
    customer = Customer.find(params[:id])
    render json: customer
  end

  def delete
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

private
def customer_params
  params.permit(:name, :email, :address, :password)
end

end



 

    






