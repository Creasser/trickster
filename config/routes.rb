Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/usersignup", to: "user#create"
  
  post "/userlogin", to: "sessions#create"

  get "/users", to: 'user#test'
  
end
