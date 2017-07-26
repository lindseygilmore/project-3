import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';
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
	events = {};

  // events: Event[] = [];
  // updateEvent: Event = new Event();
  	newEvent: Event = new Event();

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
		this.http.post('http://localhost:9393/events?token=' + window.localStorage.getItem('token'), this.newEvent).subscribe(response => {
		this.events = response.json()

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

  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }


}






