import { Component, Input, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { IProperty } from '../models/property.models';
import { IUser } from '../models/user.models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  userconnected: string ="";
  userIndex:number=0;

  @Input()
  property: IProperty[] = [];
  constructor(private propertyService:PropertyService,private userService:UserService) { }

  
  users: IUser[] = [];

  ngOnInit() {
    this.userService.user$.subscribe(data => {
      this.users = data;
      //this.userIndex=this.userService.userIndex;
      this.userconnected=this.users[this.userIndex]["name"];      
    })    
  }  

}
