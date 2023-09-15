class GoalController < ApplicationController

    def create
        goal = @current_user.goals.create(goal_params)
        render json: @current_user.goals, status: :created
    end


    #need to pass the trick_id to the server, and just use goal_params

    private

    def goal_params
        params.permit(:trick_id, :is_completed, :attempts)
    end

end
