class Event < ActiveRecord::Base
	self.table_name = 'event'

	# include SearchCop

	# search_scope :search do
	#    attributes :name, :location, :event_date
	#    options :all, :type => :fulltext, default: true
	   
	# end

end