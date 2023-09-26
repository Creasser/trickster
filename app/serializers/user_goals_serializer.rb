class UserGoalsSerializer < ActiveModel::Serializer
  attributes :trick, :is_completed, :attempts, :id

  belongs_to :trick
end
