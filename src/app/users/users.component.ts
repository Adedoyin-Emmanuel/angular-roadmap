import { Component } from '@angular/core';
import { UsersService } from './users.service';
import userInterface from '../types/user-type';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  allUsers: userInterface[] = [];
  addedUsers: userInterface[] = [];

  constructor(usersService: UsersService) {
    this.allUsers = usersService.getAllUsers();
  }


  handleClick($event:userInterface)
  {
    //push the user which is emitted as an event
    this.addedUsers.push($event);
  }
}
