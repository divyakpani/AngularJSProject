import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'billcalulator'
})
export class BillcalulatorPipe implements PipeTransform {

  transform(value: any, args?: any): any { 
    
    return value * args;

    }
  }


