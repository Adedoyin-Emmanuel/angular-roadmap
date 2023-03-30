import { Injectable } from '@angular/core';
import userInterface from '../types/user-type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  allUsers: userInterface[] = [
    {
      name: 'Adedoyin Emmanuel',
      age: 17,
      hobbies: ['coding, biking, gaming'],
    },

    {
      name: 'Adedoyin Israel',
      age: 11,
      hobbies: ['drawing, eating, gaming'],
    },
  ];

  getAllUsers(): userInterface[] {
    return this.allUsers;
  }
}
