import { Component, EventEmitter, Input, Output } from '@angular/core';
import userInterface from '../types/user-type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: userInterface = {} as userInterface;
  @Output() userEmitter = new EventEmitter<userInterface>();

  handleClick():void | null
  {
    this.userEmitter.emit(this.user);
  }
}
