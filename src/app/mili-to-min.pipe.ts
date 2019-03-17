import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miliToMin'
})
export class MiliToMinPipe implements PipeTransform {

  transform(value: number): string {
    let seconds = (value/1000);
    let minutes = Math.floor(seconds/60);
    seconds = Math.floor(seconds%60);
    return this.pad(minutes, 2) + ':' + this.pad(seconds, 2);
  }

  pad(num:number, size:number): string {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
}
