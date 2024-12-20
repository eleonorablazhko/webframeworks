import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance',
  standalone: false,
})
export class DistancePipe implements PipeTransform {
  transform(distance: number): string {
    const _isNumeric = function (n: any) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    if (distance && _isNumeric(distance)) {
      let thisDistance = '0';
      let unit = 'm';
      if (distance > 1000) {
        thisDistance = (distance / 1000).toFixed(1);
        unit = 'km';
      } else {
        thisDistance = Math.floor(distance).toString();
      }
      return thisDistance + unit;
    } else {
      return '?';
    }
  }
}
