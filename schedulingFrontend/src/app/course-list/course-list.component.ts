import { Component, OnInit,Input,ViewChild, ViewChildren,QueryList,ElementRef,AfterViewInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,FormArray } from '@angular/forms';
import { Course } from '../course';
import { Skill } from '../skill';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements AfterViewInit {
	@Input("parentForm") parentForm: FormGroup = null;
	@Input("courses") courses: Course[] = [];
	@ViewChild("selectionList") selectionList !: any;
	@ViewChildren("chip") chips!: QueryList<any>;
	// selectedCourses: Course[] = [];
	// selectedSkills: Skill[] = [];
	// this.selectedSkills=this.parentForm.controls.skills.value;
	// this.selectedCourses = this.parentForm.controls.courses.value;
	// this.age = this.parentForm.controls.age.value;
	numberInterestsForEachCourse: any = {};
  constructor() {
  	this.resetNumberInterestsForEachCourse();
  }
  resetNumberInterestsForEachCourse(){
  	for (let course of this.courses){
  		this.numberInterestsForEachCourse[course.name] = 0;
  	}
  }
  updateNumberInterestsForEachCourse(){
  	setTimeout(() => {
  		this.courses.map((course) => {
  			let numInterestsForCourse = course.skills.filter(skill => this.parentForm.controls.skills.value.some(selectedSkill=> selectedSkill.name==skill.name)).length;
  			this.numberInterestsForEachCourse[course.name] = numInterestsForCourse;
  		});
  	});
  }
  ngAfterViewInit() {
  	this.parentForm.controls.skills.valueChanges.subscribe(() => {this.resetNumberInterestsForEachCourse(); this.updateColors();this.updateNumberInterestsForEachCourse();
  	});
  	setTimeout(() => {
  		this.resetNumberInterestsForEachCourse();
  		this.updateColors();
  		this.updateNumberInterestsForEachCourse();
  	});
  }

  updateColors(){
  	setTimeout(() => {
  		this.chips.map((chip) => {
  			// chip.nativeElement.textContent is "skill.name"
  			if (this.parentForm.controls.skills.value.some(s => s.name === chip.nativeElement.textContent)){
  				chip.nativeElement.classList.remove('mat-accent');
  				chip.nativeElement.classList.add("mat-primary");
  			}
  			else {
  				chip.nativeElement.classList.remove('mat-primary');
  				chip.nativeElement.classList.add("mat-accent");
  			}
  		});
  	});
  }
  focus() {
  	// this.selectionList.focus();
  }

  times(max: number) {
    return {
      [Symbol.iterator]: function* () {
        for (let i = 0; i < max; i++, yield) {
        }
      }
    };
  }
  courseCardHeight() {
  	return this.times(6);
  }

}
