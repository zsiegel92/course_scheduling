import { Component, OnInit, AfterViewInit, QueryList,ElementRef} from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
// import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';
// import { FormBaseComponent } from '../form-base/form-base.component';
import { Skill } from '../skill';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

	// student: Student;
  basicForm: FormGroup;
  interestForm: FormGroup;
  interests: Skill[] =[];
  hasUnitNumber = false;
  states: any[];

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
  	this.basicForm = studentFormService.makeBasicForm();
  	this.interestForm = this.studentFormService.makeInterestForm();
  }
  ngOnInit(){
  }


}
