class TrickController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        tricks = Trick.all
        render json: tricks, status: :created
    end

    def create
        trick = @current_user.tricks.create(trick_params)
        if trick.valid?
            render json: trick, status: :created
        else
            render json: {errors: trick.errors.full_messages}, status: :unprocessable_entity
        end
    end


    private

    def trick_params 
        params.permit(:category_id, :title, :difficulty)
    end

end
