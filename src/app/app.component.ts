import { Component } from '@angular/core';
import { PropertyService } from './property.service';
import { IProperty } from './models/property.models';
import { UserService } from './user.service';
import { IUser } from './models/user.models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'immobilier';
  properties: IProperty[] = [];
  users: IUser[] = [];
  userIndex:number=0;
  isconnected:boolean = true;

  propertyForm = this.formBuilder.group({
    name: ''
  });

  constructor(private propertyService:PropertyService,private userService:UserService,private formBuilder: FormBuilder) { 
    this.userService.userindex$.subscribe(data => {
      this.userIndex=data;    
      });
      console.log(this.userIndex);
  
  }

  ngOnInit() {
    
    this.getProperties(); 
    
  }  

  getProperties(){
    this.propertyService.property$.subscribe(data => {
      this.properties = data;
    })  
  }

  onSubmit(): void {
    this.isconnected= true;
    this.properties.forEach(element => {
        if(element.name == this.propertyForm.value.name){         
          this.sellProperty(this.properties.indexOf(element),element.price);
        }        
      });
    this.propertyForm.reset();
  }

  sellProperty(id:number,price:number){
    this.propertyService.properties.splice(id,1);
    this.propertyService.property$.next(this.propertyService.properties);

    this.userService.user$.subscribe(data => {
      this.users = data;
      console.log(data[this.userIndex]["pay"]);
      data[0]["pay"]+=price;
      console.log(data[this.userIndex]["pay"]);
    })  

  }

}
