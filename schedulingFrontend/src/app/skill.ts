export class Skill {

	id: string;
	name: string;
	has_interest: boolean;

	constructor(name:string,id:string='-1',has_interest:boolean=false){
		this.id=id;
		this.name=name;
		this.has_interest=has_interest;
	}
}
