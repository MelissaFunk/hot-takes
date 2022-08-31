Rails.application.routes.draw do
  resources :lists, only: [:index, :show, :create, :update]
  resources :categories, only: [:index, :show]
  resources :users, only: [:index, :create]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/my-lists/:id', to: 'users#my_lists'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
