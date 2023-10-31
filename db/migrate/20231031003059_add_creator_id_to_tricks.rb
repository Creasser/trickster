class AddCreatorIdToTricks < ActiveRecord::Migration[7.0]
  def change
    add_column :tricks, :creator_id, :integer
  end
end
