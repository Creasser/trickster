class CreateGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :goals do |t|
      t.integer :user_id
      t.integer :trick_id
      t.boolean :is_completed
      t.integer :attempts

      t.timestamps
    end
  end
end
