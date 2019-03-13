import { Component, AfterViewInit, Input,forwardRef,Directive, TemplateRef, ViewContainerRef,ContentChild, ElementRef,ViewChild, SkipSelf} from '@angular/core';


import {  NgForm, NgModelGroup, ControlContainer,FormGroupDirective, FormControl } from '@angular/forms';
// import { ProvideParentFormModule } from '../provide-parent-form/provide-parent-form.module';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
  // viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
  // viewProviders: [{
  //    provide: ControlContainer,
  //    useFactory: (container: ControlContainer) => container,
  //    deps: [[new SkipSelf(), ControlContainer]],
  //  }]
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class FormPageComponent implements AfterViewInit {
	@Input('model-group-name') modelGroupName !: string;
	@Input('form-reference') parentForm !: any;
	// @ViewChild('childForm') childForm !: any;
	// @ViewChild('childModel') childModel !: any;

  constructor() {}

  ngAfterViewInit() {

  	// this.parentForm.form.addControl(this.modelGroupName, this.childModel.form);
  	// this.parentForm.addControl(this.modelGroupName, this.childForm.form);
  	// let chimod = this.parentForm.getFormGroup(this.childModel);
  	// this.parentForm.addFormGroup(chimod);
  }

}
