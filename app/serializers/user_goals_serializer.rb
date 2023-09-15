class UserGoalsSerializer < ActiveModel::Serializer
  attributes :trick

  belongs_to :trick
end
