import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  events = {};

  constructor(private http: Http, private router: Router){

  }
 }