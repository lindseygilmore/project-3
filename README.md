# Full-stack event app using Sinatra + Angular4

### User Story

This app helps users track and add events they want to attend. Users can search and send events to friends and also purchase tickets to an event in their area.

User Capabilities:

 * Sign up
 * Login
 * Add events
 * Edit events
 * Search events
 * Send event to friend
 * Purchase tickets via external site

 ### Getting Started

Clone this repository locally:

	$ 	git clone <github url>

Install dependencies with npm:

	$ 	npm install
    
You may need to generate Angular components with Angular-cli. If you receive an Angular-cli error in the terminal, you need to install @angular/cli in npm global context.

	$ 	npm install -g @angular/cli

### To Build

In new terminal window: start server -> cd into server folder and run shotgun to fire up the server on port 9393.

	$	cd server
   	$	shotgun

In new terminal window: start client -> cd into client folder and run npm install to install everything needed to run the app. Then run ng serve to open the app in your browser, which will connect to localhost:4200.

	$	cd client
    $	npm install
    $	ng serve


### Features

*	Angular4
*	Typescript
*	Angular CLI
*	Sinatra
*	Ruby
*	CSS 3
*	Bcrypt
*	PSQL

### Link to hosted app

 * [Event App](<heroku link>)

### Planning

Wireframes and schemas located in 'Planning' folder of github file. 

See project planning on [Trello](<https://trello.com/b/tVUp68wt/ga-project-3>).

### To be completed

* Create ability to add friends on the app and share events within app.
* Incorporate event api to pull real-time data and tickets.
* Include pay for event within the app rather than going to external site.
* Create save method for users to save events to their account.






