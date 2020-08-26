import { Component, OnInit } from '@angular/core';
import { UserService }  from '../../services/user.service';
import { User } from '../../models/user';

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
	public title:string;
	public identity;
	public token;

	constructor(private userService:UserService){
		this.title = 'Bienvenido a NGSocial'
	}

	ngOnInit(){
		this.identity = this.userService.getIdentity();
		this.token = this.userService.getToken();
		console.log('home.component cargado !!');
	}
}