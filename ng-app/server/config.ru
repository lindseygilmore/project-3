require 'bundler'
Bundler.require

require './models/EventModel.rb'
require './models/UserModel.rb'

require './controllers/ApplicationController.rb'
require './controllers/EventController.rb'
require './controllers/UserController.rb'


run Sinatra::Application 

ActiveRecord::Base.establish_connection(
	adapter: 'postgresql',
	database: 'events'
	)

map('/events'){run EventController}
map('/users'){run UserController}


