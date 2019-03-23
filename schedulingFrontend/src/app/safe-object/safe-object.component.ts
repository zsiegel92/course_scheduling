import { Component, OnInit, Input,ViewChildren,QueryList, ElementRef,EventEmitter,Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-safe-object',
  templateUrl: './safe-object.component.html',
  styleUrls: ['./safe-object.component.css']
})
export class SafeObjectComponent implements AfterViewInit {
	@Input("object") obj !: any;
	@Input("depth") depth: number = 0;
	@Input("maxDepth") maxDepth: number = 7;
	@Input("value") value: any = null;
	@ViewChildren("child") children !: QueryList<ElementRef>;
	numChildren: number = 0;

  constructor() {
  }





  ngAfterViewInit() {
  	setTimeout(() => {
  		this.numChildren= this.children.length;
  	           });
  }

}
