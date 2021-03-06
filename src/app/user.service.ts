import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIndex:number=-1;

  public users: IUser[]= [
    {
      id:1,
      name:"Paul",
      password:"123",
      pay:1000
    },
    {
      id:2,      
      name:"Mariane",
      password:"456",
      pay:2000
    },
    {
      id:3,      
      name:"Julie",
      password:"789",
      pay:3000
    }
  ]

  
 public user$ : BehaviorSubject<IUser[]>;
 public userindex$ : BehaviorSubject<number>;
 
 constructor() {
   this.user$ = new BehaviorSubject<IUser[]>(this.users);
   this.userindex$ = new BehaviorSubject<number>(this.userIndex);
  } 

  updateUserIndex(newUserindex: number){
    this.userIndex = newUserindex;
    this.userindex$.next(this.userIndex);
  }
}
