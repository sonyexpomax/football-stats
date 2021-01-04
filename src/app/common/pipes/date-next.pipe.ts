import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'newNextDate'})

export class DateNextPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + value);
    return newDate;
  }

}

