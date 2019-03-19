import { Injectable } from '@angular/core';
import { FormGroup,FormArray, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export abstract class FormService {

  abstract submit(): void;

  formName: string;

}
