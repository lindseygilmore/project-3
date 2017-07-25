import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {
  events = {};

  	constructor(private http: Http, private router: Router){
  		this.getEvents();
  	}

//get event by keyword. define keyword prior to entry 
//get event by location (zip code)
	getEvents(){
		this.http.get('http://localhost:9393/events').subscribe(response => {
		this.events = response.json()


		})
	}


	deleteEvent(event){
	    this.http.delete('http://localhost:9393/events/' + event.id).subscribe(response =>
	      this.events = response.json()
	    )
	  }

}






