import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class FormService {

  abstract submit(): void;

}
