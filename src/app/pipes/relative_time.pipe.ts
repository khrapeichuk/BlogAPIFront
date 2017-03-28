import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'timeFromNow' })

export class RelativeTimePipe implements PipeTransform {
  transform(date: any, args?: any): any {

    let creationDate = new Date(date);

    return moment(creationDate).fromNow();
  }
}
