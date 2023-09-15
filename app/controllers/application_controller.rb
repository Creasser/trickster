class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    before_action :set_current_user

    def authorize
      render json: {errors: ['Not Authorized']}, status: :unauthorized unless session.include? :user_id
    end

    def set_current_user
      if session[:user_id]
        @current_user = User.find_by(id: session[:user_id])
      end
    end

end
