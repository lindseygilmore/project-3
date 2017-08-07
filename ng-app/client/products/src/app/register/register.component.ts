import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
	user = {};

  	constructor(private http: Http, private router: Router){
 
  	}

	register(){
    this.http.post('https://eventertain.herokuapp.com/users/register', this.user).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      console.log(response.json().token)
      this.router.navigate(['/login'])

    })
  }
  
}




