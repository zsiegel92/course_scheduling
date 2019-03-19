import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export function randInt(min: number,max:number) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
}

export function randomlySelectKIndices(k:number,n:number){
  let inds: number[] = [];
  var replace: number;
  for (let i: number = 0; i < n; i++){
    if (i < k) {
      inds.push(i);
    }
    else if (Math.random() < k/(i+1)) {
    	replace = randInt(0,inds.length-1);
      inds[replace] = i;
    }
  }
  return inds;
}

export function randomlySelectK(k:number,l: any[]){
  return randomlySelectKIndices(k,l.length).map((i) => l[i]);
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RandomFunctionsModule {
}
