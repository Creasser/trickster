class UserController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        @user = User.create(user_params)
        if @user.valid?
            UserMailer.with(user: @user).welcome_message.deliver_now
            session[:user_id] = @user.id
            render json: @user, status: :created
        else
            render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            render json: user, status: :created
        else
            render json: {errors: 'Not Logged In'}, status:  :unauthorized
        end
    end

    def test
        users = User.all
        render json: users
    end

    private

    

    def user_params
        params.permit(:username, :password, :password_confirmation, :email) 
    end

end
