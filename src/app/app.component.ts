import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  fruits: string[] = ["apple", "orange", "mangoes", "carrots", "cucumber", "cashew", "cherry", "strawberry"];

  anotherFruit: string[] = ["apple", "orange", "mangoes"];

  currentFruitSelected = this.selectRandomFruit(this.anotherFruit);

  buttonLoading = true;

  buttonError = false;


  toggleButtonState(): void | null
  {
    this.buttonLoading = !this.buttonLoading;
   // this.buttonError = !this.buttonError;
  }

  toggleButtonErrorState(): void | null
  {
    this.buttonError = !this.buttonError;
  }
  selectRandomFruit(fruitsArray:string[])
  {
    return fruitsArray[Math.floor(Math.random() * fruitsArray.length)]
  }


  toggleFruits (): void | null
  {
    this.currentFruitSelected = this.selectRandomFruit(this.anotherFruit);

  }



  handleSubmit(form:any, others:any)
  {
    console.log(form);
    console.log(others);
  }


}
