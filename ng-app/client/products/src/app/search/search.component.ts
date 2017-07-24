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

  	}

	getEvents(){
		this.http.get('http://api.eventful.com/rest/events/search?&keyword=zip?key=4fJVC6hcH77RQ5bx').subscribe(response => {
		this.events = response.json()

		})
	}
}




