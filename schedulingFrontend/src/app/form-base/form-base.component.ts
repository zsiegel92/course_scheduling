import { Component, OnInit, AfterContentInit, QueryList, Input, ViewChild, ViewChildren, ContentChildren, ContentChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
// import { StudentFormService } from '../student-form.service';
import { MessageService } from '../message.service';
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
	@ContentChildren('page') pages !: QueryList<any>;
	comps: any[] = [];
	numSteps: number = 0;
	step: number = 0;
	styles: String[] = [];


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
	move(steps:number):void{
		// this.comp.syncForm();
		if ((this.step + steps > -1) && (this.step + steps < this.numSteps)){
			var p1 = this.comps[this.step].nativeElement.className;
			let p2 = this.comps[this.step + steps].nativeElement.className;

			p1 = p1 + ' hidden';
			p2 = this.removeToken(p2,'hidden');

			this.comps[this.step].nativeElement.className = p1;
			this.comps[this.step + steps].nativeElement.className= p2;

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
  ngAfterContentInit() {
  	// setTimeout(() => {
  		this.pages.map((p) => {
  			this.comps.push(p);
  			p.nativeElement.className = 'hidden';
  			// this.styles.push('hidden');
  			// p.ngClass = styles[this.numSteps];
  			this.numSteps++;
  			return this.numSteps-1;
  		});
  	// });
  	this.comps[0].nativeElement.className = this.removeToken(this.comps[0].nativeElement.className,'hidden');

  }


}
