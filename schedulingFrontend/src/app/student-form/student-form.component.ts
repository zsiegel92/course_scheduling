import { Component, OnInit, AfterViewInit, QueryList,ElementRef,ViewEncapsulation} from '@angular/core';
import {MatSnackBar} from '@angular/material';
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
export class StudentFormComponent implements OnInit,AfterViewInit {
	states: any[];
	// student: Student;
  basicForm: FormGroup;
  interestForm: FormGroup;
  interests: Skill[] =[];
  hasUnitNumber = false;
  courses: Course[] = [];
  ageAppropriateCourses: Course[] = [];
  numberAgeAppropriate: any = {};
  // ngFor [ngForOf]="courseCardHeight()"

  // https://stackoverflow.com/questions/36535629/repeat-html-element-multiple-times-using-ngfor-based-on-a-number
  // ngFor [ngForOf]="times(6)"

  applyCourseFilters(){
  	setTimeout(() => {
  		let age = this.studentFormService.getAge();
  		for (let k in this.numberAgeAppropriate) {
				this.numberAgeAppropriate[k]=0;
  		}
  		this.ageAppropriateCourses = this.courses.filter((course) => (course.min_age <= age && course.max_age >= age)).map((age_appropriate_course) => {
  				for (let interest of age_appropriate_course.skills){
  					this.numberAgeAppropriate[interest.name]++;
  				}
  				return age_appropriate_course;
  			});

  	});
  }

  submit() {
  	// let student = new Student();
  	// let basicInfo = new BasicInfo();
  	this.studentFormService.submit();
  }

  say(message:any){
  	this.studentFormService.say(message);
  }
  removeInterest(interest:Skill){
  	this.studentFormService.removeInterest(interest);
  	let sbref = this.openSnackBar(`NOT Interested in  ${interest.name}`,"UNDO");
  	sbref.onAction().subscribe(($event) => {
  		this.studentFormService.addInterest(interest)
  		}
  	);
  }
  removeAllInterests(){
  	let current_interests = this.studentFormService.getSelectedInterests();
  	this.studentFormService.removeAllInterests();
  	let sbref = this.openSnackBar("Removed ALL Interests","UNDO");
  	sbref.onAction().subscribe(($event) => {
  		this.studentFormService.addInterests(current_interests);
  		}
  	);
  }

	constructor(public studentFormService: StudentFormService,private snackBar: MatSnackBar) {
		// this.student = this.studentFormService.student;
		// this.basicInfo = new BasicInfo();
		this.states = studentFormService.getStates();
		this.interests = studentFormService.getInterests();
		this.courses = studentFormService.getCourses();
		this.basicForm = studentFormService.makeBasicForm();
		this.interestForm = this.studentFormService.makeInterestForm();
		for (let interest of this.interests) {
			this.numberAgeAppropriate[interest.name] = 0;
		}

	}
  // }
  openSnackBar(message: string, action: string) {
      return this.snackBar.open(message, action, {duration: 2000,});
  }
  ngOnInit(){
  	// this.removeMinValStyles();
  }
  ngAfterViewInit(){
	 this.removeMinValStyles();
	 this.applyCourseFilters();
  }
  removeMinValStyles(){
  	setTimeout(() => {
  			var minvals = document.getElementsByClassName("mat-slider-min-value");
  			while (minvals.length){
  			    minvals[0].className = minvals[0].className.replace(/\bmat-slider-min-value\b/g, "");
  		  }
  		});
  }


}
