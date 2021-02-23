import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';
import { IProperty } from '../models/property.models';
import { IUser } from '../models/user.models';
import { UserService } from '../user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  properties: IProperty[] = [];
  users: IUser[] = [];
  numberofproperties: number = 0;
  pay:number = 0;
  userIndex:number=0;

  constructor(private propertyService:PropertyService,private userService:UserService) { 
  }
  
  ngOnInit() {
    this.propertyService.property$.subscribe(data => {
      this.properties = data;    
      this.numberofproperties= data.length;
    })

    this.userService.user$.subscribe(data => {
      this.users = data;    
      this.pay= data[this.userIndex]["pay"];
      this.userIndex=this.userService.userIndex;
    })
    
  } 

}
