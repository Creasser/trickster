Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  #User signup, login, and logout routes
  get '/me', to: 'user#show'
  post "/usersignup", to: "user#create"
  post "/userlogin", to: "sessions#create"
  delete "/userlogout", to: "sessions#destroy"

  #Routes to add and edit tricks 

  get "/users", to: 'user#test'
  

end
