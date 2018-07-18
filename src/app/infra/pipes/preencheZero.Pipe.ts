import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'fillZeroMask' })
export class PreencheZeroPipe implements PipeTransform {

    transform(value: string) {
      if ( value) {
        return ('00000' + value).slice(-5);
      }
      return value;
    }

}
