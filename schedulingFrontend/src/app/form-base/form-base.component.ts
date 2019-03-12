import { Component, OnInit, AfterViewInit, QueryList, Input, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
// import { StudentFormService } from '../student-form.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent implements AfterViewInit {
	@Input() topText: string;
	@Input() contactEmail: string;
	@Input() formService !: any;
	@ViewChildren('page') pages !: QueryList<any>;
	numSteps: number = 0;
	step: number = 0;

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
		this.formService.submit();
		this.router.navigate(['/submitted']);
	}


  constructor(private dataService: DataService,private router: Router, private messageService: MessageService) {
  	this.contactEmail='';
  	this.topText='';
  }
  ngAfterViewInit() {
  	setTimeout(() => {
  		this.pages.map((p) => {
  			this.numSteps++;
  			return this.numSteps-1;
  		});
  	});
  }


}
