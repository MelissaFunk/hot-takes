Rails.application.routes.draw do
  resources :comments, only: [:create]
  resources :lists, only: [:index, :show, :create]
  resources :categories, only: [:index, :show]
  resources :users, only: [:index, :create]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
