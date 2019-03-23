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
    setInterests() {
      for (let s of ["Web Development","Data Science","Art","Windows/Mac","Photography","Mathematics"]){
        this.interests.push(new Skill(s));
      }
    }
    getInterests() {
      return this.interests;
    }

    setCourses() {
      let id: string;
      let name: string;
      let desc: string;
      let min_age: number;
      let max_age: number;
      let skills: Skill[];
      this.courses = [];
      for (let name of ["Databases for Dummies","Basic CRUD App","PhotoShop for Pros","Building a Raspberry Pi"]){
        id = String(-1);
        desc = "A course involving " + name;
        min_age = randInt(5,20);
        max_age = randInt(min_age,20);
        skills = randomlySelectK(randInt(0,this.interests.length-1), this.interests);
        this.courses.push(new Course(id,name,desc,min_age,max_age,skills));
      }
    }

    getCourses(){
      return this.courses;
    }

    getLastForm(){
      return this.forms[this.forms.length-1];
    }
    makeBasicForm(): FormGroup{
      let bi = new BasicInfo();
      this.forms['basic']= bi.toFormGroup();
      return this.forms['basic'];
    }

    makeInterestForm(): FormGroup {
      this.forms['interest'] = this.fb.group({skills: new FormControl([]),courses: new FormControl([])})
      return this.forms['interest'];
    }
    getStates() : any[]{
      return States;
    }
    removeInterest(interest:Skill){
      let vals = this.forms['interest'].controls.skills.value;
      let index = vals.findIndex(other_interest => (other_interest== interest));
      vals.splice(index,1);
      this.forms['interest'].controls.skills.setValue(vals);
    }
}
