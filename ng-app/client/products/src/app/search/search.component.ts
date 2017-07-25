import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

	events: Event[] = [];

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
}




