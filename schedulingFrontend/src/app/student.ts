export class Student {
  id: number;
  first: string;
  last: string;
  email: string;
  address: string;
  zip: string;
  phone: string;
  prefs: any[];

  constructor(){
  	this.id=-1;
  	this.first = '';
  	this.last = '';
  	this.email = '';
  }
}
