import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	comps: any[];
	step: number;
	public comp;


	move(steps:number):void{
		this.comp.syncForm();
		if ((this.step + steps > -1) && (this.step + steps < 4)){
			this.step = this.step + steps;
		}
		this.setcomp();
	}

	setcomp(){
		this.comp = this.comps[this.step];
		// this.comp.prepForm();
	}

	submit(){
		this.comp.syncForm();
		this.formService.submit();
		this.router.navigate(['/submitted']);
	}

	invalidform(){
		return false
	}

  constructor(private dataService: DataService,private formService: FormService,private router: Router) {
  	this.step=0;
  }

  ngOnInit() {
  	// this.comps = [this.studentForm,this.venueForm,this.dateForm,this.accommodationForm];
  	this.comps = [];
  	this.setcomp();
  }

}
