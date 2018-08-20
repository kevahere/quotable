import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ): number {

    let today: Date = new Date();//current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)// returns value in milliseconds
    const secondsInAday = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInAday;

    if (dateCounter >= 1) {
      return dateCounter;
    } else {
      return 0;
    }
  }

}
