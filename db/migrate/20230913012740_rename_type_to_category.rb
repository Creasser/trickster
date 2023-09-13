class RenameTypeToCategory < ActiveRecord::Migration[7.0]
  def change
      rename_column :categories, :type, :category
  end
end
