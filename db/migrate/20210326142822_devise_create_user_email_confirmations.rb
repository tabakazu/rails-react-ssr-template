class DeviseCreateUserEmailConfirmations < ActiveRecord::Migration[6.1]
  def change
    create_table :user_email_confirmations, id: :bigint, unsigned: true do |t|
      # Confirmable
      t.string   :confirmation_token,   null: true, comment: 'パスワード確認用トークン'
      t.datetime :confirmed_at,         null: true, comment: 'パスワード確認時刻'
      t.datetime :confirmation_sent_at, null: true, comment: 'パスワード確認送信時刻'
      t.string   :unconfirmed_email,    null: true, comment: '未確認メールアドレス'

      t.timestamps null: false

      t.index [:confirmation_token], unique: true
      t.index [:unconfirmed_email], unique: true
    end
  end
end
