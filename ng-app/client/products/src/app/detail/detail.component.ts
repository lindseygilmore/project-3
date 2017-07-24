import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  event = {};

  constructor(private http: Http, private router: Router){

  }
 }