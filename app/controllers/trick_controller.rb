class TrickController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: {errors: 'This is working'}, status: :created
    end

    def create
        trick = Trick.create(trick_params)
        if trick.valid?
            render json: trick, status: :created
        else
            render json: {errors: trick.errors.full_messages}, status: :unprocessable_entity
        end
    end


    private

    def trick_params 
        params.permit(:category, :title, :difficulty)
    end

end
