import { Injectable, /*OnInit*/ } from '@angular/core';

import { DataService } from './data.service';
// import { Student } from './student';
import { BasicInfo, States } from './basic-info';
import { Skill } from './skill';
import { Course } from './course';
import {MessageService } from './message.service';
import { FormService } from './form.service';
import {FormBuilder, FormControl, FormGroup,FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { randomlySelectKIndices,randomlySelectK, randInt} from './random-functions/random-functions.module'; //ONLY FOR TESTING


@Injectable({
  providedIn: 'root'
})
export class StudentFormService implements FormService {
    // public student: Student;
    public formName: string = "StudentForm";
    // basicForm: FormGroup;
    public interests: Skill[] = [];
    public courses: Course[] = [];
    public forms: any = {};
    getStates() : any[]{
      return States;
    }

    say(message: any){
      this.messageService.add(message);
    }
    sayJSON(message: any){
      this.messageService.add(JSON.stringify(message));
    }
    constructor(private dataService: DataService,private router: Router,private fb: FormBuilder,private messageService: MessageService) {
      // this.student = new Student();
      this.setInterests();
      this.setCourses();
      this.messageService
      // for (let course of this.courses) {
      //   this.sayJSON(course);
      // }
    }

  	submit():void{
      let bi = new BasicInfo();
      bi.fromFormGroup(this.forms['basic']);
      this.sayJSON(bi);
      // this.router.navigate(['/submitted']);
  	}
    makeBasicForm(): FormGroup{
      let bi = new BasicInfo();
      this.forms['basic']= bi.toFormGroup();
      return this.forms['basic'];
    }
    makeInterestForm(): FormGroup {
      this.forms['interest'] = this.fb.group({
        skills: new FormControl([]),
        courses: new FormControl([]),
        age: new FormControl(9)
      })
      return this.forms['interest'];
    }

    getAge(){
      return this.forms['interest'].controls.age.value;
    }
    removeInterest(interest:Skill): void{
      let vals = this.forms['interest'].controls.skills.value;
      let index = vals.findIndex(other_interest => (other_interest== interest));
      vals.splice(index,1);
      this.forms['interest'].controls.skills.setValue(vals);
    }
    addInterest(interest:Skill): void{
      let vals = this.forms['interest'].controls.skills.value;
      vals.push(interest);
      this.forms['interest'].controls.skills.setValue(vals);
    }
    removeAllInterests():void{
      this.forms['interest'].controls.skills.setValue([]);
    }
    addInterests(interests:Skill[]): void{
      this.forms['interest'].controls.skills.setValue(interests);
    }

    setInterests() {
      for (let s of ["Web Development","Data Science","Art","Photography & Video","Mathematics","Game Design","Music","3D-Design"]){
        this.interests.push(new Skill(s));
      }
    }
    getInterests() {
      return this.interests;
    }
    getSelectedInterests(){
      return this.forms['interest'].controls.skills.value;
    }
    setCourses() {
      let id: string;
      let name: string;
      let desc: string;
      let min_age: number;
      let max_age: number;
      let skills: Skill[];
      this.courses = [];
      for (let name of ["Databases for Dummies","Basic CRUD App","PhotoShop for Pros","Building a Raspberry Pi","Mobile Game Development","GarageBand 101","Introductory AutoCAD"]){
        id = String(-1);
        desc = "A course involving " + name;
        min_age = randInt(5,15);
        max_age = randInt(min_age,15);
        skills = randomlySelectK(randInt(1,this.interests.length-1), this.interests);
        this.courses.push(new Course(id,name,desc,min_age,max_age,skills));
      }
    }

    getCourses(){
      return this.courses;
    }

}
