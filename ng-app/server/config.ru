require 'bundler'
Bundler.require

require './models/EventModel.rb'


require './controllers/ApplicationController.rb'
require './controllers/EventController.rb'


run Sinatra::Application 

ActiveRecord::Base.establish_connection(
	adapter: 'postgresql',
	database: 'events'
	)

map('/events'){run EventController}


