import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  courses:string[] = ["Frontend Development", "Backend Development", "Web3 Development", "Ui development"];
  
  
  getCourses()
  {
    return this.courses;
  }
}
