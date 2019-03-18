import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-group-display',
  templateUrl: './form-group-display.component.html',
  styleUrls: ['./form-group-display.component.css']
})
export class FormGroupDisplayComponent implements OnInit {
	@Input("form-group") formGroup !: any;
  constructor() { }

  ngOnInit() {
  }

}
