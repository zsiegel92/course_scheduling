import { Skill } from './skill';
import {BasicInfo} from './basic-info'

export class Student {
  id: number = -1;
  basicInfo: BasicInfo;
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
