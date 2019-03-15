import { Component, OnInit, AfterViewInit, QueryList,ElementRef} from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
// import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';
import { FormBaseComponent } from '../form-base/form-base.component';
import { Skill } from '../skill';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements AfterViewInit {
	// @ViewChild(FormBaseComponent) f;
	student: Student;
	interests: Skill[]=[];


	// toggleSkill(interest: Skill){
	// 	if (this.student.interests.some(e => ((e.name == interest.name) && (e.id == interest.id)))){
	// 		var index = this.student.interests.indexOf(interest);
	// 		this.student.interests.splice(index, 1);
	// 	}
	// 	else {
	// 		this.student.interests.push(interest);
	// 	}
	// }
  constructor(public studentFormService: StudentFormService) {
  	this.student = this.studentFormService.student;
  	this. interests = this.studentFormService.interests;
  	for (let interest of this.interests){
  		// this.student.interests[interest]=false;
  	}

  }

  ngAfterViewInit() {
  }

}
