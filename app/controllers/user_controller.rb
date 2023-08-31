class UserController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
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
