# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_26_142822) do

  create_table "items", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_database_authentications", id: { type: :bigint, unsigned: true }, charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id", null: false, unsigned: true
    t.string "email", default: "", null: false, comment: "メールアドレス"
    t.string "encrypted_password", default: "", null: false, comment: "暗号化されたパスワード"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_user_database_authentications_on_email", unique: true
    t.index ["user_id"], name: "index_user_database_authentications_on_user_id"
  end

  create_table "user_email_confirmations", id: { type: :bigint, unsigned: true }, charset: "utf8mb4", force: :cascade do |t|
    t.string "confirmation_token", comment: "パスワード確認用トークン"
    t.datetime "confirmed_at", comment: "パスワード確認時刻"
    t.datetime "confirmation_sent_at", comment: "パスワード確認送信時刻"
    t.string "unconfirmed_email", comment: "未確認メールアドレス"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["confirmation_token"], name: "index_user_email_confirmations_on_confirmation_token", unique: true
    t.index ["unconfirmed_email"], name: "index_user_email_confirmations_on_unconfirmed_email", unique: true
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "given_name"
    t.string "family_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
