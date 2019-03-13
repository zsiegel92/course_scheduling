import { Component, OnInit, AfterViewInit, QueryList,ElementRef} from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
// import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements AfterViewInit {
	// @ViewChild(FormBaseComponent) f;
	student: Student;

  constructor(private studentFormService: StudentFormService) {
  	this.student = this.studentFormService.student;
  }

  ngAfterViewInit() {
  }

}
