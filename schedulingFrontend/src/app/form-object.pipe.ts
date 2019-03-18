import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formObject'
})
export class FormObjectPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
