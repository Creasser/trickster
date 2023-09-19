class TrickSerializer < ActiveModel::Serializer
  attributes :id, :title, :difficulty

  belongs_to :category, serializer: CategoryTrickSerializer
end
