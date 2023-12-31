class GoalSerializer < ActiveModel::Serializer
  attributes :id, :attempts, :is_completed

  belongs_to :trick
  has_one :category, through: :trick
end
