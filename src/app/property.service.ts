import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProperty } from './models/property.models';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: IProperty[]= [
    {
      id:1,
      name:"Maison1",
      address:"2 rue des mimosas",
      price:2000000,
      owner:"Paul"
    },
    {
      id:2,      
      name:"Maison2",
      address:"3 impasse des fialtiers",
      price:10000000,
      owner:"Paul"
    },
    {
      id:3,      
      name:"Maison3",
      address:"4 impasse des fialtiers",
      price:10000000,
      owner:"Mariane"
    }
  ]

 public property$ : BehaviorSubject<IProperty[]>;
 
 constructor() {
   this.property$ = new BehaviorSubject<IProperty[]>(this.properties);
  } 
  
}
