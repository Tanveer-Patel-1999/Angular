import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe2'
})
export class Mypipe2Pipe implements PipeTransform {

  transform(value: string, exp: string): string {
    if(exp<='3')
  
    {
    return 'junior developer with:'+exp;
  }
    else
    {
    return 'senior developer with:'+exp;
  }
  }

}
