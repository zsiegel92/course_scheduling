import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { StudentFormService } from '../student-form.service';

@Component({
  selector: 'student-form-1',
  templateUrl: './student-form-1.component.html',
  styleUrls: ['./student-form-1.component.css']
})
export class StudentForm1Component implements OnInit {
	@ViewChild("f") f: NgForm;


	syncForm(){
		// this.formService.birthday=this.model;
		// this.formService.entry.school = this.selectedSchool.name;
		// this.formService.entry.schoolId = this.selectedSchool.id;
		// this.formService.entry.hebSchool = this.selectedHebSchool.name;
		// this.formService.entry.hebSchoolId = this.selectedHebSchool.id;
		// this.formService.entry.DOB = this.model.hgregorian;
	}
	prepForm(){

	}

  constructor(public formService: StudentFormService) {
   //  this.maxDate = {year: now.getFullYear()-5, month: now.getMonth() + 1, day: now.getDate()};
  	// this.minDate = {year: now.getFullYear() - 15, month: now.getMonth() + 1, day: now.getDate()};
  	// this.otherSchool = new School();
  	// this.otherHebSchool = new School();
  	// this.selectedSchool= this.otherSchool;
  	// this.selectedHebSchool = this.otherHebSchool;
  }

  ngOnInit() {
  	// this.model = new DoubleDate();
  	// this.model.thirteen_ago();
  	// this.get_all_schools();
  	// this.formService.birthday=this.model;
  }

}
