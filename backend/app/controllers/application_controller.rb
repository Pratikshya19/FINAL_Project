class ApplicationController < ActionController::API
    before_action :check_authentication #, only: [:purchases, :customers[:show, :delete, :profile]]

   def encode_token(payload)
    JWT.encode(payload,'app_wide_secret_for_every_user')
   end

    def auth_header
        request.headers['Authorization']
    end

    def current_customer
      
      if decoded_token
        
      customer_id = decoded_token["customer_id"]
      customer = Customer.find_by(id: customer_id)

      puts "everything has worked so far in current_customer."
      customer
      
      end
    end

    def decoded_token
    if auth_header
    token = auth_header.split(' ')[1]

    begin
        JWT.decode(token, 'app_wide_secret_for_every_user')[0]
    rescue JWT::DecodeError
        nil
     end
    end
   end

   def check_authentication
    # render json: { error: 'Please log in' }, status: 401 if !logged_in?
    
    puts `are we logged in?: #{logged_in?.to_s}`

    # byebug
    if(!logged_in?)
      render json: { error: 'Please log in' }, status: 401
    else
      #find item in the cart of the user based on params
      #destroy the item
      
      item_to_delete = current_customer.shopping_cart.cart_items.find_by(id:params[:item_id])
      index_to_delete = current_customer.shopping_cart.cart_items.index(item_to_delete)
      # byebug
      current_customer.shopping_cart.cart_items[index_to_delete].destroy
      
      
      # byebug
      render json: current_customer, status: 200
    end
    
  
  end

  def logged_in?
    !!current_customer
  end




end