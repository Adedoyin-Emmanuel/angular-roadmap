import { Component } from '@angular/core';

interface likeComponentProp
{
    likeCount:number;
    isActive:boolean;
}
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  likeComponent: likeComponentProp = {
    likeCount: 0,
    isActive: false
  }

  handleClick()
  {
    this.likeComponent.isActive = !this.likeComponent.isActive;
    if(this.likeComponent.isActive)
    {
      this.likeComponent.likeCount++;
    }else{
      this.likeComponent.likeCount--;
    }
  }
}
