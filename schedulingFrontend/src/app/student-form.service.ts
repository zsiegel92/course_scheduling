import { Injectable, /*OnInit*/ } from '@angular/core';

import { DataService } from './data.service';
import { Student } from './student';
import { FormService } from './form.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class StudentFormService implements FormService {
    public student: Student;

  	submit(){
      this.router.navigate(['/submitted']);
  	}

    constructor(private dataService: DataService,private router: Router) {
      this.student = new Student();
    	// this.getSchools();
    	// this.getHebSchools();
    }

    // ngOnInit(){}
}
