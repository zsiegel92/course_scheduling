import { Skill } from './skill';

export class Student {
  id: number = -1;
  first: string = '';
  last: string = '';
  email: string = '';
  address: string;
  zip: string;
  phone: string;
  prefs: any[];
  skills: Skill[] = [];
  interests: Skill[] =[];


  constructor(){
  }
}
