class GoalController < ApplicationController

    def create
        goal = @current_user.goals.create(goal_params)
        render json: goal, status: :created
    end

    def update
        goal = @current_user.goals.find(params[:id])
        goal.update(goal_params)
        if goal.valid?
            render json: goal, status: :created
        else
            render json: {errors: goal.errors.full_messages}, status: :unprocessable_entity
        end
    end

    #need to pass the trick_id to the server, and just use goal_params
    #need to set up serializer for relationships
    private

    def goal_params
        params.permit(:trick_id, :is_completed, :attempts, :id)
    end

end
