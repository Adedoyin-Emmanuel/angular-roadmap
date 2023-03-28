import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  isClicked = true;

  handleClick() {
    this.isClicked = !this.isClicked;
  }
}
