class GoalController < ApplicationController

    def create
        goal = @current_user.goals.create(goal_params)
        render json: goal, status: :created
    end


    #need to pass the trick_id to the server, and just use goal_params
    #need to set up serializer for relationships
    private

    def goal_params
        params.permit(:trick_id, :is_completed, :attempts)
    end

end
