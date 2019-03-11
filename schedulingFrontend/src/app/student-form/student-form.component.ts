import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
	// comps: any[];
	numSteps: number = 4;
	step: number;
	// public comp;
	student: Student;



	move(steps:number):void{
		// this.comp.syncForm();
		if ((this.step + steps > -1) && (this.step + steps < this.numSteps)){
			this.step = this.step + steps;
		}
		// this.setcomp();
	}

	setcomp(){
		// this.comp = this.comps[this.step];
		// this.comp.prepForm();
	}

	submit(){
		// this.comp.syncForm();
		this.studentFormService.submit();
		this.router.navigate(['/submitted']);
	}

	invalidform(){
		return false
	}

  constructor(private dataService: DataService,private studentFormService: StudentFormService,private router: Router, private messageService: MessageService) {
  	this.step=0;
  	this.student = this.studentFormService.student;
  }

  ngOnInit() {
  	// this.comps = [this.studentForm1];
  	// this.comps = [];
  	// this.setcomp();
  }

}
