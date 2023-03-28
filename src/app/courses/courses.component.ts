import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
interface pipes {
  uppercaseName: string;
  lowercaseName: string;
  titlecaseName: string;
  numbers: number;
  currency: string | number;
  decimal: number;
  longText: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  allCourses: string[] = [];
  username = '';
  pipes: pipes = {
    uppercaseName: 'adedoyin emmanuel',
    lowercaseName: 'ADEDOYIN EMMANUEL',
    titlecaseName: 'the rise of the planets of apes',
    numbers: 3000000,
    currency: 1000,
    decimal: 3.142,
    longText:
      'the dawn of the planets of apes',
  };

  constructor(courses: CoursesService) {
    this.allCourses = courses.getCourses();
  }

  handleChange = () => {
    
  };
}
