Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :api do
  #   namespace :v1 do

  resources :cart_items, :categories, :customers, :items, :purchases, :shopping_carts
get '/customers/:id/items', to: 'customers#cart_items'

delete '/customers/:id/items/:item_id', to: 'customers#delete'

  post '/login', to: 'auth#login'
get '/profile', to: 'customers#profile' 
post '/SignUp', to: 'customers#create'
get '/Cart', to: 'cart_items#index'
post '/cart_Items', to: 'cart_items#create'
post '/purchase', to: 'purchases#create'
get '/cart_Items', to: 'cart_items#index'
 get '/Cartitems', to: 'cart_items#addtocart'
end
