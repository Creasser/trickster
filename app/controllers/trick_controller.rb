class TrickController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: {errors: 'This is working'}, status: :created
    end

end
