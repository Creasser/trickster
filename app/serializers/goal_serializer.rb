class GoalSerializer < ActiveModel::Serializer
  attributes :id, :attempts, :is_completed, :user_id

  belongs_to :trick
end
