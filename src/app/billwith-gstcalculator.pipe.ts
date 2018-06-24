import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'billwithGSTcalculator'
})

export class BillwithGSTcalculatorPipe implements PipeTransform {
  TotalAmount=0;
  TotalWithGst=0;
  transform(valueSeatCount: any, argsSeatCharge?: any, argsGST?: any): any {
    this.TotalAmount=valueSeatCount * argsSeatCharge;
    this.TotalWithGst=this.TotalAmount * argsGST / 100;
    this.TotalWithGst=this.TotalWithGst + this.TotalAmount;
    return this.TotalWithGst;
  }

}
