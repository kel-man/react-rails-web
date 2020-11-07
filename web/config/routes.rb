Rails.application.routes.draw do
  devise_for :users, defaults: {format: :json}, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
  }
  root 'static_pages#index'

  get 'authstate' => 'auth_context#index'

  resources :profiles, only: [:show, :index, :create, :update, :destroy]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :blogs, only: [:index, :show, :create, :update, :destroy]

  get '*path' => 'static_pages#index', constraints: lambda {|req| req.path.exclude? 'rails/active_storage'}
end
