import { Component, OnInit,ViewChild } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.css']
})
export class FormBasicComponent implements OnInit {
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

  constructor(public formService: FormService) {
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
