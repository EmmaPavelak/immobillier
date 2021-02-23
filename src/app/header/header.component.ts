import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUser } from '../models/user.models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isconnected: boolean = false;
  users: IUser[] = [];
  fullname: string ="";
  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  userIndex:number = -1;

  constructor( private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(data => {
      this.users = data;
    }) 
    
  }

  onSubmit(): void {
    this.isconnected= true;
    this.fullname=this.loginForm.value.name;      

    this.users.forEach(element => {
      if(element.name == this.loginForm.value.name){       
        this.userIndex= this.users.indexOf(element);        
      }        
    });
    this.userService.updateUserIndex(this.userIndex);

    this.userService.userindex$.subscribe(data => {
      console.log( data);
      });

    this.loginForm.reset();

  }
  logout(){
    this.isconnected= false;
  }

}
