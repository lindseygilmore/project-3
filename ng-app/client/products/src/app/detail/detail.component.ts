import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})


export class DetailComponent implements OnInit {
  event: Event = new Event();


  constructor(private route: ActivatedRoute, private http: Http, private router: Router) {
    let id = this.route.snapshot.params.id;
    this.getEvent(id);
  }


  ngOnInit() {
  }


  getEvent(id){
    this.http.get('http://localhost:9393/events/' + id + '?token=' + window.localStorage.getItem('token')).subscribe(response => {
      this.event = response.json()
    })
  }


  logout(){
      window.localStorage.clear();
    this.router.navigate(['/login'])
  }
}