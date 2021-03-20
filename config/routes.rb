Rails.application.routes.draw do
  root 'homes#show'

  devise_for :user, skip: :all
  devise_for :user_database_authentications, controllers: { sessions: 'user_sessions' }, skip: :all
  devise_scope :user_database_authentication do
    get 'login' => 'user_sessions#new', as: :new_user_session
    post 'login' => 'user_sessions#create', as: :user_session
    delete 'logout' => 'user_sessions#destroy', as: :destroy_user_session
  end

  resources :items

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
