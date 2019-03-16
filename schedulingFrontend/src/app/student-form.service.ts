import { Injectable, /*OnInit*/ } from '@angular/core';

import { DataService } from './data.service';
import { Student } from './student';
import { Skill } from './skill';
import { FormService } from './form.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudentFormService implements FormService {
    public student: Student;
    public formName: string = "StudentForm";
    basicForm: FormGroup;
    // public interests: Skill[] = [];
  	submit(){
      this.router.navigate(['/submitted']);
  	}
    setSkills() {
      for (let s of ["Web Development","Data Science","Art"]){
        this.student.interests.push(new Skill(s));
      }
    }

    getForm(){
      this.basicForm = this.formBuilder.group({
        first: ['', Validators.required],
        last: ['', Validators.required],
        email: ['', Validators.required]
      });
      return this.basicForm;
    }
    constructor(private dataService: DataService,private router: Router,private formBuilder: FormBuilder) {
      this.student = new Student();
      this.setSkills();
    	// this.getSchools();
    	// this.getHebSchools();
    }

    // ngOnInit(){}
}
