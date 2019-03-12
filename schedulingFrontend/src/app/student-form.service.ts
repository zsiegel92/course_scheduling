import { Injectable, /*OnInit*/ } from '@angular/core';

import { DataService } from './data.service';
import { Student } from './student';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root'
})
export class StudentFormService implements FormService {
    public student: Student;

  	submit(){
  	}

    constructor(private dataService: DataService) {
      this.student = new Student();
    	// this.getSchools();
    	// this.getHebSchools();
    }

    // ngOnInit(){}
}
