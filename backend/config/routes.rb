Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :api do
  #   namespace :v1 do

  resources :cart_items, :categories, :customers, :items, :purchases, :shopping_carts

  post '/login', to: 'auth#create'
get '/profile', to: 'customers#profile' 
post '/SignUp', to: 'auth#create'
  
  #   end
  # end
end
