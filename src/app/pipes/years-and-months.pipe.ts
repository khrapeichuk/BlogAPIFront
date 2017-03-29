import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yearsAndMonths' })

export class YearsAndMonthsPipe implements PipeTransform {
  transform(date: any): any {
    let registrationDate = new Date(date);
    let currentDate = new Date();

    let totalMonths = (currentDate.getFullYear() * 12 + currentDate.getMonth()) - (registrationDate.getFullYear() * 12 + registrationDate.getMonth());

    let years = Math.floor(totalMonths / 12);
    let months = totalMonths % 12;

    if (years === 0) {
      if (months === 0) {
        return ' recently';
      } else {
        return months + ' month(-s)';
      }
    } else {
      if (months === 0) {
        return years + ' year(-s)';
      } else {
        return years + ' year(-s) and ' + months + ' month(-s)';
      }
    }
  }
}
