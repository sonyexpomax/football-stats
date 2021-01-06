import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'newNextDate'})

export class DateNextPipe implements PipeTransform {
  transform(value?: number): string {
    if (value) {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + value);
      return newDate.toISOString().slice(0, 10);
    } else {
      return new Date(Date.now()).toISOString().slice(0, 10);
    }
  }

}

