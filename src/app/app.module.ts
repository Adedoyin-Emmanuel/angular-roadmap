import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { FormsModule } from '@angular/forms';
import { CoursesPipe } from './courses/courses.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { InputComponent } from './input/input.component';
import { InputPipe } from './input/input.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesPipe,
    StarRatingComponent,
    InputComponent,
    InputPipe,

  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
