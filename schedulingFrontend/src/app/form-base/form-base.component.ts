import { Component, OnInit, AfterContentInit, QueryList, Input, ViewChild, ViewChildren, ContentChildren, ContentChild,ElementRef} from '@angular/core';
// import { Router } from '@angular/router';
// import { DataService } from '../data.service';
// import { StudentFormService } from '../student-form.service';
// import { MessageService } from '../message.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.css']
})
export class FormBaseComponent implements AfterContentInit {
	@Input('top-text') topText: string;
	@Input('contact-email') contactEmail: string;
	@Input('form-service') formService !: FormService;
	@ContentChildren('page', {read: ElementRef,descendants: true}) pages !: QueryList<ElementRef>;
	@ContentChild('f') f !: any;
	comps: any[] = [];
	numSteps: number = 0;
	step: number;
	comp: any;
	formGroupNames: string[] = [];
	formGroupName: string = '';
	formGroup: any = {};

	removeToken(string: String,token: String){
		var oldList: String[] = string.split(" ");
		var newList: String[] =[];
		for (var i=0; i < oldList.length; i++){
			if (oldList[i] != token) {
				newList.push(oldList[i]);
			}
		}
		return newList.join(" ");
	}

	validStep(steps:number): boolean{
		return ((this.step + steps > -1) && (this.step + steps < this.numSteps));
	}
	hideComp():void {
		var p = this.comp.nativeElement.className;
		p = p + " hidden";
		this.comp.nativeElement.className = p;
	}
	showComp():void{
		var p = this.comp.nativeElement.className;
		p = this.removeToken(p,'hidden');
		this.comp.nativeElement.className = p;
	}
	move(steps:number):void{
		// this.comp.syncForm();
		if (this.validStep(steps)){
			this.step = this.step + steps;
			this.setComp();
		}
	}

	setComp(){
		this.hideComp();
		this.comp = this.comps[this.step];
		this.formGroupName = this.formGroupNames[this.step];
		this.formGroup = this.f.form.controls[this.formGroupName];
		this.showComp();
	}

	submit(){
		// this.comp.syncForm();
		this.formService.submit();
	}

	logComps(){
		console.log(this.comps);
	}
  constructor() {
  	this.contactEmail='';
  	this.topText='';
  	this.step=0;
  }
  ngAfterContentInit() {
  		this.pages.map((p) => {
  			this.comps.push(p);
  			this.formGroupNames.push(p.nativeElement.getAttribute('ngModelGroup'));
  			p.nativeElement.className = 'hidden';//UNCOMMENT
  			p.nativeElement.ngModelGroup = this.formService.formName + this.numSteps;
  			this.numSteps++;
  		});
  	this.comp = this.comps[0];
  	this.formGroupName = this.formGroupNames[0];
  	this.formGroup = this.f.form.controls[this.formGroupName];
  	this.showComp();//UNCOMMENT

  }


}
