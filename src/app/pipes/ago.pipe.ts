import { Pipe, PipeTransform } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'ago'
})
export class AgoPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): Observable<string> {

    let withTimer = timer(0, 10000).pipe(map(num => this.calcAgo(value)))
    return withTimer
  }

  calcAgo = (value) => {
    const diff = Date.now() - value;
    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    let timev = '';
    if(days >= 1) {
      timev = Math.floor(days) + ` day${Math.floor(days) > 1 ? 's' : ''} ago`
    } else if(hours >= 1){
      timev = Math.floor(hours) + ` hr${Math.floor(hours) > 1 ? 's' : ''} ago`
    } else if(minutes >= 1){
      timev = Math.floor(minutes) + ` min${Math.floor(minutes) > 1 ? 's' : ''} ago`
    } else if(seconds >= 30) {
      timev = Math.floor(seconds) + ` sec${Math.floor(seconds) > 1 ? 's' : ''} ago`
    } else {
      timev = 'Just Now'
    }
    return timev;
  }

}
