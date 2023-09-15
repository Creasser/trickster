class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :goals, :created_tricks

  has_many :goals , serializer: UserGoalsSerializer

  def created_tricks
    object.tricks
  end

end
