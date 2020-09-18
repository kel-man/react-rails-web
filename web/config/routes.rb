Rails.application.routes.draw do
  devise_for :users, defaults: {format: :json}, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
  }
  root 'static_pages#index'

  get 'authstate' => 'auth_context#index'

  resources :profiles, only: [:show, :index]
  resources :items, only: [:index, :show, :create, :update, :destroy]
  # post '/items' => 'items#create'
  # get '/items/:id' => 'items#show'
  # patch '/items/:id' => 'items#update'
  # delete '/items/:id' => 'items#destroy'

  get '*path' => 'static_pages#index'
end
