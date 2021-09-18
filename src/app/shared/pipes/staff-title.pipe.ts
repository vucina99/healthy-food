import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'staffTitle'
})
export class StaffTitlePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender !== 'female')
      return "Mr. " + name;
    else
      return "Miss " + name;
  }

}
