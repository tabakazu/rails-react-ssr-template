# frozen_string_literal: true

class DeviseCreateUserDatabaseAuthentications < ActiveRecord::Migration[6.1]
  def change
    create_table :user_database_authentications, id: :bigint, unsigned: true do |t|
      t.references :user, null: false, unsigned: true

      # Database authenticatable
      t.string :email,              null: false, default: '', comment: 'メールアドレス'
      t.string :encrypted_password, null: false, default: '', comment: '暗号化されたパスワード'

      t.timestamps null: false

      t.index [:email], unique: true
    end
  end
end
