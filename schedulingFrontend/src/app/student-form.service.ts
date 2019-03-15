import { Injectable, /*OnInit*/ } from '@angular/core';

import { DataService } from './data.service';
import { Student } from './student';
import { Skill } from './skill';
import { FormService } from './form.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudentFormService implements FormService {
    public student: Student;
    public formName: string = "StudentForm";
    public interests: Skill[] = [];
  	submit(){
      this.router.navigate(['/submitted']);
  	}
    setSkills() {
      for (let s of ["Web Development","Data Science","Art"]){
        this.interests.push(new Skill(s));
      }
    }
    constructor(private dataService: DataService,private router: Router) {
      this.student = new Student();
      this.setSkills();
    	// this.getSchools();
    	// this.getHebSchools();
    }

    // ngOnInit(){}
}
