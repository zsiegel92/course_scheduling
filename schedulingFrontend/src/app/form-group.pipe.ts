import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formGroup'
})
export class FormGroupPipe implements PipeTransform {

  transform(formGroup: any, args?: any): any {

  	// `
  	// <ul>
  	//   <li *ngFor="let field of basicForm.controls | keyvalue">
  	//      {{field.key}}: {{field.value.value}}
  	//      <button mat-button (click)="subFields.hidden = !subFields.hidden">Show More"</button>
  	//      <ul #subFields hidden="true">
  	//        <li *ngFor="let subField of field.value | keyvalue">
  	//          {{subField.key}} : {{subField.value }}
  	//        </li>
  	//      </ul>
  	//    </li>
  	// </ul>
  	// `

  	// let out: string = "";
  	// for (let field in formGroup.controls) {

  	// }


    return "<b>HELLO</b>";
    // return null;

  }

}
