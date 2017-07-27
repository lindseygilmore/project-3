class EventController < ApplicationController


	get '/' do
		events = Event.all
		events.to_json
	end

	get '/:id' do
		id = params[:id]
		event = Event.find(id)
		event.to_json
	end

	post '/' do
		request_body = JSON.parse(request.body.read)
		event = Event.new(request_body)
		event.save
		Event.all.to_json
	end

	patch '/:id' do
		id = params[:id]
		event = Event.find(id)
		request_body = JSON.parse(request.body.read)
		event.update_attributes(request_body)
		event.save
		Event.all.to_json
	end

	delete '/:id' do
		id = params[:id]
		event = Event.find(id)
		event.destroy
		Event.all.to_json
	end

end
