import { Skill } from './skill';
import {BasicInfo} from './basic-info'

export class Student {
  id: number = -1;
  basicInfo: BasicInfo;
  age: number = -1;
  // first: string = '';
  // last: string = '';
  // email: string = '';
  // address: string;
  // zip: string;
  // phone: string;
  prefs: any[];
  skills: Skill[] = [];
  interests: Skill[] =[];


  constructor(){
  }
}
