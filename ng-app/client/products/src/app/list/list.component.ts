import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


class Event{
  id: number;
  name: string;
  company_hosting: string;
  price: number;
  location: string;
  event_date: string;
  city_id: number;
  image_url: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
	events: Event[] = [];
	newEvent: Event = new Event();
  	updateEvent: Event = new Event();
  	showPostForm: boolean = false;
  	showPatchForm: boolean = false;
  	search: string = "";

  	constructor(private http: Http, private router: Router){
  		this.getEvents();
  	}

	getEvents(){
		this.http.get('http://localhost:9393/events?token=' + window.localStorage.getItem('token')).subscribe(response => {
		this.events = response.json()
		console.log(this.events)

		})
	}

	postEvent(){
		this.showPostForm = true;
		this.http.post('http://localhost:9393/events?token=' + window.localStorage.getItem('token'), this.newEvent).subscribe(response => {
		this.events = response.json()
		this.showPostForm = false;

		})
	}

	patchEvent(){
		this.showPatchForm = true;
		this.http.patch('http://localhost:9393/events/' + this.updateEvent.id, this.updateEvent).subscribe(response => {
		this.events = response.json()
		this.showPatchForm = false;
		
		})
	}

	deleteEvent(event){
	    this.http.delete('http://localhost:9393/events/' + event.id).subscribe(response => {
	    this.events = response.json()
	    
	    })
	}

	goToEvent(event){
    	this.router.navigate(['/events/', event.id])
  	}

    editEvent(event){
	    this.showPatchForm = true;
	    this.updateEvent = Object.assign({},event);
	}

  	logout(){
	    window.localStorage.clear();
	    this.router.navigate(['/login'])
  	}

  	searchLocation(){
  		this.http.post('http://localhost:9393/events/search' + '?token=' + window.localStorage.token, {location: this.search}).subscribe(response => {
  		this.events = response.json()
  		})
  	}

}






