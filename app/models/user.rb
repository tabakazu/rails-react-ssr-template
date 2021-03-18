class User < ApplicationRecord
  devise :authenticatable

  has_one :database_authentication, class_name: 'UserDatabaseAuthentication'
end
