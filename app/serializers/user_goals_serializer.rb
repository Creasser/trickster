class UserGoalsSerializer < ActiveModel::Serializer
  attributes :trick, :is_completed, :attempts

  belongs_to :trick
end
