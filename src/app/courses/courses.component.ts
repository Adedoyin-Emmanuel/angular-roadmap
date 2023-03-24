import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  allCourses: string[] = [];
  username = "";
  
  constructor(courses: CoursesService) {
    this.allCourses = courses.getCourses();
  }
  
  handleChange = ()=>
  {
    console.log(this.username);
  }

}
