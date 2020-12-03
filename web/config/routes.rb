Rails.application.routes.draw do
  devise_for :users, defaults: {format: :json}, controllers: {
  # devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    confirmations: 'users/confirmations',
  }
  root 'static_pages#index'

  get 'authstate' => 'auth_context#index'

  resources :profiles, only: [:show, :index, :create, :update, :destroy]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  resources :blogs, only: [:index, :show, :create, :update, :destroy]
  resources :blog_comments, only: [:index, :show, :create, :update, :destroy]

  get '*path' => 'static_pages#index', constraints: lambda {|req| req.path.exclude? 'rails/active_storage'}
end
