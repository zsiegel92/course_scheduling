import {FormBuilder, FormGroup, Validators} from '@angular/forms';


export class BasicInfo {
  phone= '';
  first = '';
  last = '';
  email= '';
  address='';
  address2= '';
  city= '';
  state='';
  zip= '';

  fromFormGroup(formGroup: FormGroup):void{
  	for (let field in formGroup.controls){
  		this[field] = formGroup.controls[field].value;
  		// console.log("this." + field + ": " + this[field]);
  	}
  }
  constructor(){

  }

  toFormGroup():FormGroup{
  	let fb = new FormBuilder();
  	let json:any = JSON.parse(JSON.stringify(this));
  	for (let field in json){
  		json[field] = [json[field],Validators.required];
  	}
  	json['phone'][1]=Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15),Validators.pattern(/^([0-9]( *| ?- ?|.)?)?(\(?[0-9]{3}\)?|[0-9]{3})( *| ?- ?|.)?([0-9]{3}( *| ?- ?|.)?[0-9]{4}|[a-zA-Z0-9]{7})$/)]);
  	json['address2'] = json['address2'][0];
  	json['zip'][1] = Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("[0-9]*")]);
  	return fb.group(json);
  }
}


export const States = [
	{name: 'Alabama', abbreviation: 'AL'},
	{name: 'Alaska', abbreviation: 'AK'},
	{name: 'American Samoa', abbreviation: 'AS'},
	{name: 'Arizona', abbreviation: 'AZ'},
	{name: 'Arkansas', abbreviation: 'AR'},
	{name: 'California', abbreviation: 'CA'},
	{name: 'Colorado', abbreviation: 'CO'},
	{name: 'Connecticut', abbreviation: 'CT'},
	{name: 'Delaware', abbreviation: 'DE'},
	{name: 'District Of Columbia', abbreviation: 'DC'},
	{name: 'Federated States Of Micronesia', abbreviation: 'FM'},
	{name: 'Florida', abbreviation: 'FL'},
	{name: 'Georgia', abbreviation: 'GA'},
	{name: 'Guam', abbreviation: 'GU'},
	{name: 'Hawaii', abbreviation: 'HI'},
	{name: 'Idaho', abbreviation: 'ID'},
	{name: 'Illinois', abbreviation: 'IL'},
	{name: 'Indiana', abbreviation: 'IN'},
	{name: 'Iowa', abbreviation: 'IA'},
	{name: 'Kansas', abbreviation: 'KS'},
	{name: 'Kentucky', abbreviation: 'KY'},
	{name: 'Louisiana', abbreviation: 'LA'},
	{name: 'Maine', abbreviation: 'ME'},
	{name: 'Marshall Islands', abbreviation: 'MH'},
	{name: 'Maryland', abbreviation: 'MD'},
	{name: 'Massachusetts', abbreviation: 'MA'},
	{name: 'Michigan', abbreviation: 'MI'},
	{name: 'Minnesota', abbreviation: 'MN'},
	{name: 'Mississippi', abbreviation: 'MS'},
	{name: 'Missouri', abbreviation: 'MO'},
	{name: 'Montana', abbreviation: 'MT'},
	{name: 'Nebraska', abbreviation: 'NE'},
	{name: 'Nevada', abbreviation: 'NV'},
	{name: 'New Hampshire', abbreviation: 'NH'},
	{name: 'New Jersey', abbreviation: 'NJ'},
	{name: 'New Mexico', abbreviation: 'NM'},
	{name: 'New York', abbreviation: 'NY'},
	{name: 'North Carolina', abbreviation: 'NC'},
	{name: 'North Dakota', abbreviation: 'ND'},
	{name: 'Northern Mariana Islands', abbreviation: 'MP'},
	{name: 'Ohio', abbreviation: 'OH'},
	{name: 'Oklahoma', abbreviation: 'OK'},
	{name: 'Oregon', abbreviation: 'OR'},
	{name: 'Palau', abbreviation: 'PW'},
	{name: 'Pennsylvania', abbreviation: 'PA'},
	{name: 'Puerto Rico', abbreviation: 'PR'},
	{name: 'Rhode Island', abbreviation: 'RI'},
	{name: 'South Carolina', abbreviation: 'SC'},
	{name: 'South Dakota', abbreviation: 'SD'},
	{name: 'Tennessee', abbreviation: 'TN'},
	{name: 'Texas', abbreviation: 'TX'},
	{name: 'Utah', abbreviation: 'UT'},
	{name: 'Vermont', abbreviation: 'VT'},
	{name: 'Virgin Islands', abbreviation: 'VI'},
	{name: 'Virginia', abbreviation: 'VA'},
	{name: 'Washington', abbreviation: 'WA'},
	{name: 'West Virginia', abbreviation: 'WV'},
	{name: 'Wisconsin', abbreviation: 'WI'},
	{name: 'Wyoming', abbreviation: 'WY'}
];


