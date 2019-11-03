Rails.application.routes.draw do
  devise_for :users, defaults: {format: :json}, controllers: {
    registrations: 'users/registrations',
  }
  root 'static_pages#index'

  get 'static_pages/home'

  get 'static_pages/about'

  get 'static_pages/help'

  get 'static_pages/contact'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path' => 'static_pages#index'
end
