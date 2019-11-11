Rails.application.routes.draw do
  devise_for :users, defaults: {format: :json}, controllers: {
    registrations: 'users/registrations',
  }
  root 'static_pages#index'

  # get 'auth_context#index'
  resource :profiles, only: [:show, :index]

  get '*path' => 'static_pages#index'
end
