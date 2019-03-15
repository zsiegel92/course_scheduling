import { Component, OnInit, OnChanges,AfterContentInit,AfterViewInit, AfterViewChecked, QueryList, Input, ViewChild, ViewChildren, ContentChildren, ContentChild,ElementRef, ChangeDetectorRef} from '@angular/core';
import { take } from 'rxjs/operators';
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
	step: number = 0;
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

	hideAComp(p: any):void{
			var pclasses = p.nativeElement.className;
			pclasses = pclasses + " hidden";
			p.nativeElement.className = pclasses;
	}
	hideComp():void {
		if (this.comp){
			this.hideAComp(this.comp);
		}
	}
	showComp():void{
		if (this.comp){
			var p = this.comp.nativeElement.className;
			p = this.removeToken(p,'hidden');
			this.comp.nativeElement.className = p;
		}
	}
	submit(){
		// this.comp.syncForm();
		this.formService.submit();
	}

  ngAfterContentInit() {
  	this.pages.map((p) => {
  		// p.nativeElement.setAttribute('ngModelGroup',this.formService.formName + this.numSteps)
  		return p;
  	}).map((p) =>   	{
  		this.comps.push(p);
  		this.formGroupNames.push(p.nativeElement.getAttribute('ngModelGroup'));
  		this.hideAComp(p);
  		this.numSteps++;
  	});

  	this.f.valueChanges.pipe(take(1)).subscribe(form => {
  		this.setComp();
  	});
  }
  constructor() {
  }

}



