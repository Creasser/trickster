class CategoryController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        cat = Category.all
        render json: cat, status: :created
    end

end
