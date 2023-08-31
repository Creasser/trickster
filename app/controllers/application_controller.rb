class ApplicationController < ActionController::API
    include ActionController::Cookies
    #include ActionController::Serializer

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end
end
