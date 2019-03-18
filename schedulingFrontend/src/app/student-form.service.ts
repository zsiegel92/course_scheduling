import { Injectable, /*OnInit*/ } from '@angular/core';

import { DataService } from './data.service';
// import { Student } from './student';
import { Skill } from './skill';
import { FormService } from './form.service';
import {FormBuilder, FormControl, FormGroup,FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class StudentFormService implements FormService {
    // public student: Student;
    public formName: string = "StudentForm";
    // basicForm: FormGroup;
    public interests: Skill[] = [];
  	submit(){
      this.router.navigate(['/submitted']);
  	}
    setInterests() {
      for (let s of ["Web Development","Data Science","Art"]){
        this.interests.push(new Skill(s));
      }
    }
    getInterests() {
      return this.interests;
    }

    // getForm(){

    //   return this.basicForm;
    // }
    constructor(private dataService: DataService,private router: Router,private fb: FormBuilder) {
      // this.student = new Student();
      this.setInterests();
    }
    makeBasicForm(): FormGroup{
      let bi = new BasicInfo();
      return this.fb.group(bi);
    }

    makeInterestForm(): FormGroup {
      // let preferences = new FormArray([]);
      // this.interests.map((o, i) => {
      //       const control = new FormControl(0); // if first item set to true, else false
      //       (preferences as FormArray).push(control);
      //     });
      return this.fb.group({preferences: new FormControl([])});
    }

    // ngOnInit(){}
}


class BasicInfo {
  phone= ['', Validators.compose([
  Validators.required, Validators.minLength(10), Validators.maxLength(15)])];
  first = ['', Validators.required];
  last =  ['', Validators.required];
  email= ['', Validators.required];
  address= ['', Validators.required];
  address2= '';
  city= ['', Validators.required];
  state= ['', Validators.required];
  zip= [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("[0-9]*")])
    ];

  }



export const States = [
  {name: 'Alabama', abbreviation: 'AL'},
  {name: 'Alaska', abbreviation: 'AK'},
  {name: 'American Samoa', abbreviation: 'AS'},
  {name: 'Arizona', abbreviation: 'AZ'},
  {name: 'Arkansas', abbreviation: 'AR'},
  {name: 'California', abbreviation: 'CA'},
  {name: 'Colorado', abbreviation: 'CO'},
  {name: 'Connecticut', abbreviation: 'CT'},
  {name: 'Delaware', abbreviation: 'DE'},
  {name: 'District Of Columbia', abbreviation: 'DC'},
  {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
  {name: 'Florida', abbreviation: 'FL'},
  {name: 'Georgia', abbreviation: 'GA'},
  {name: 'Guam', abbreviation: 'GU'},
  {name: 'Hawaii', abbreviation: 'HI'},
  {name: 'Idaho', abbreviation: 'ID'},
  {name: 'Illinois', abbreviation: 'IL'},
  {name: 'Indiana', abbreviation: 'IN'},
  {name: 'Iowa', abbreviation: 'IA'},
  {name: 'Kansas', abbreviation: 'KS'},
  {name: 'Kentucky', abbreviation: 'KY'},
  {name: 'Louisiana', abbreviation: 'LA'},
  {name: 'Maine', abbreviation: 'ME'},
  {name: 'Marshall Islands', abbreviation: 'MH'},
  {name: 'Maryland', abbreviation: 'MD'},
  {name: 'Massachusetts', abbreviation: 'MA'},
  {name: 'Michigan', abbreviation: 'MI'},
  {name: 'Minnesota', abbreviation: 'MN'},
  {name: 'Mississippi', abbreviation: 'MS'},
  {name: 'Missouri', abbreviation: 'MO'},
  {name: 'Montana', abbreviation: 'MT'},
  {name: 'Nebraska', abbreviation: 'NE'},
  {name: 'Nevada', abbreviation: 'NV'},
  {name: 'New Hampshire', abbreviation: 'NH'},
  {name: 'New Jersey', abbreviation: 'NJ'},
  {name: 'New Mexico', abbreviation: 'NM'},
  {name: 'New York', abbreviation: 'NY'},
  {name: 'North Carolina', abbreviation: 'NC'},
  {name: 'North Dakota', abbreviation: 'ND'},
  {name: 'Northern Mariana Islands', abbreviation: 'MP'},
  {name: 'Ohio', abbreviation: 'OH'},
  {name: 'Oklahoma', abbreviation: 'OK'},
  {name: 'Oregon', abbreviation: 'OR'},
  {name: 'Palau', abbreviation: 'PW'},
  {name: 'Pennsylvania', abbreviation: 'PA'},
  {name: 'Puerto Rico', abbreviation: 'PR'},
  {name: 'Rhode Island', abbreviation: 'RI'},
  {name: 'South Carolina', abbreviation: 'SC'},
  {name: 'South Dakota', abbreviation: 'SD'},
  {name: 'Tennessee', abbreviation: 'TN'},
  {name: 'Texas', abbreviation: 'TX'},
  {name: 'Utah', abbreviation: 'UT'},
  {name: 'Vermont', abbreviation: 'VT'},
  {name: 'Virgin Islands', abbreviation: 'VI'},
  {name: 'Virginia', abbreviation: 'VA'},
  {name: 'Washington', abbreviation: 'WA'},
  {name: 'West Virginia', abbreviation: 'WV'},
  {name: 'Wisconsin', abbreviation: 'WI'},
  {name: 'Wyoming', abbreviation: 'WY'}
];


