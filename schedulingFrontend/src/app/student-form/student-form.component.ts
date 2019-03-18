import { Component, OnInit, AfterViewInit, QueryList,ElementRef} from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
// import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';
// import { FormBaseComponent } from '../form-base/form-base.component';
import { Skill } from '../skill';
import {BasicInfo, States } from '../basic-info';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

	student: Student;
  basicForm: FormGroup;
  interestForm: FormGroup;
  basicInfo: BasicInfo;

  hasUnitNumber = false;

  states;

  constructor(public studentFormService: StudentFormService,private formBuilder: FormBuilder) {
  	this.student = this.studentFormService.student;
  	this.basicInfo = new BasicInfo();
  	this.states = States;
  }
  ngOnInit(){

  	// this.basicForm = this.studentFormService.getForm();
  	// this.basicForm = this.formBuilder.group({
  	//   first: ['', Validators.required],
  	//   last: ['', Validators.required],
  	//   email: ['', Validators.required]
  	// });

  	this.basicForm = this.formBuilder.group(this.basicInfo);


  	this.interestForm = this.formBuilder.group({
  	  secondCtrl: ['', Validators.required]
  	});
  }


}
