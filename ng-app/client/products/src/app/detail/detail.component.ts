import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';

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
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  event: Event = new Event();

  constructor(private route: ActivatedRoute, private http: Http) {
    let id = this.route.snapshot.params.id;
    this.getEvent(id);
  }

  ngOnInit() {
  }

  getEvent(id){
    this.http.get('http://localhost:9393/events/' + id).subscribe(response =>
      this.event = response.json()
    )
  	}

}