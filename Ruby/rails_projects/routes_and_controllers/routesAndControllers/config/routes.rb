Rails.application.routes.draw do
  root 'greetings#index'

  get 'greetings/hello' => "greetings#hello"


  get 'greetings/hello(/:name)' => "greetings#say"
  # get 'greetings/hello/:name' => "greetings#say" # apparently this
  # get 'greetings/hello/(:name)' => "greetings#say" # and this all work the same way, why?
  #the "id" from here in the routes file is whats passed into the params as ":name" in the say method found in the greetings_controller file
  get 'greetings/times' => "greetings#times"
  get 'greetings/times/restart' => "greetings#restart"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
