import { Component, OnInit, AfterViewInit, QueryList,ElementRef,ViewEncapsulation} from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
// import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';
// import { FormBaseComponent } from '../form-base/form-base.component';
import { Skill } from '../skill';
import { Course } from '../course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

//ViewEncapsulation for tooltip matTooltipClass
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StudentFormComponent implements OnInit {
	states: any[];
	// student: Student;
  basicForm: FormGroup;
  interestForm: FormGroup;
  interests: Skill[] =[];
  hasUnitNumber = false;
  courses: Course[] = [];


  // ngFor [ngForOf]="courseCardHeight()"
  courseCardHeight() {
  	return this.times(6);
  }
  // https://stackoverflow.com/questions/36535629/repeat-html-element-multiple-times-using-ngfor-based-on-a-number
  // ngFor [ngForOf]="times(6)"
  times(max: number) {
    return {
      [Symbol.iterator]: function* () {
        for (let i = 0; i < max; i++, yield) {
        }
      }
    };
  }

  submit() {
  	// let student = new Student();
  	// let basicInfo = new BasicInfo();
  	this.studentFormService.submit();
  }

  constructor(public studentFormService: StudentFormService) {
  	// this.student = this.studentFormService.student;
  	// this.basicInfo = new BasicInfo();
  	this.states = studentFormService.getStates();
  	this.interests = studentFormService.getInterests();
  	this.courses = studentFormService.getCourses();
  	this.basicForm = studentFormService.makeBasicForm();
  	this.interestForm = this.studentFormService.makeInterestForm();
  }
  say(message:any){
  	this.studentFormService.say(message);
  }
  removeInterest(interest:Skill){
  	return this.studentFormService.removeInterest(interest);
  }
  // addMe(course:any){

  // }
  ngOnInit(){
  }


}
