import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [

  	{
    path: 'login',
    component: LoginComponent
  	},

  	{ 
  	path: 'search',
  	component: SearchComponent
	},

	{ 
	path: 'events/:id',
	component: DetailComponent
	},

	{
	path: 'list',
	component: ListComponent
	}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    DetailComponent,
    ListComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }




