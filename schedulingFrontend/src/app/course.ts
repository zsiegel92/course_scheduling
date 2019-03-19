import { Skill } from './skill';

export class Course {
	id: string;
	name: string;
	desc: string;
	min_age: number;
	max_age: number;
	skills: Skill[];
	constructor(id:string,name:string,desc:string,min_age:number,max_age:number,skills:Skill[]){
		this.id = id;
		this.name = name;
		this.desc = desc;
		this.min_age = min_age;
		this.max_age = max_age;
		this.skills = skills;
	}
}
