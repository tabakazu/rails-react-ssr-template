class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :given_name
      t.string :family_name

      t.timestamps
    end
  end
end
