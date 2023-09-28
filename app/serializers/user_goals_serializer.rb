class UserGoalsSerializer < ActiveModel::Serializer
  attributes :is_completed, :attempts, :id, :trick

  belongs_to :trick
end
