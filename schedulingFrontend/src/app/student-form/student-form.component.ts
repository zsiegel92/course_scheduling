import { Component, OnInit, AfterViewInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { StudentFormService } from '../student-form.service';
import { MessageService } from '../message.service';
// import { StudentForm1Component } from '../student-form-1/student-form-1.component';
import { Student } from '../student';
import { FormBaseComponent } from '../form-base/form-base.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements AfterViewInit {
	@ViewChild(FormBaseComponent) f;
	// comps: any[];
	// numSteps: number = 0;
	// step: number = 0;
	// public comp;
	student: Student;



	// move(steps:number):void{
	// 	// this.comp.syncForm();
	// 	if ((this.step + steps > -1) && (this.step + steps < this.numSteps)){
	// 		this.step = this.step + steps;
	// 	}
	// 	// this.setcomp();
	// }

	// setcomp(){
	// 	// this.comp = this.comps[this.step];
	// 	// this.comp.prepForm();
	// }

	// submit(){
	// 	// this.comp.syncForm();
	// 	this.studentFormService.submit();
	// 	this.router.navigate(['/submitted']);
	// }

	// invalidform(){
	// 	return false
	// }

	// isHidden(p: any){
	// 	return false;
	// }

  constructor(private dataService: DataService,private studentFormService: StudentFormService,private router: Router, private messageService: MessageService) {
  	this.student = this.studentFormService.student;
  }

  ngAfterViewInit() {
  	// setTimeout(() => {
  	// 	this.pages.map((p) => {
  	// 		this.numSteps++;
  	// 		return this.numSteps-1;
  	// 	});
  	// });
  }

}
