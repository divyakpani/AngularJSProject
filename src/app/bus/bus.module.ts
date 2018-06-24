import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { SearchComponent } from '../search/search.component';
import { BusDetailsComponent } from '../bus-details/bus-details.component';
import { PaymentComponent } from '../payment/payment.component';
import { CreditcardComponent } from '../creditcard/creditcard.component';
import { InternetbankingComponent } from '../internetbanking/internetbanking.component';
import { CodComponent } from '../cod/cod.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule,MatSelectModule,MatCardModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatIconModule,MatTabsModule} from '@angular/material';
import { BillcalulatorPipe } from '../billcalulator.pipe';
import { BillwithGSTcalculatorPipe } from '../billwith-gstcalculator.pipe';

const myrouchildRoute: Routes=[
  {path: 'busdetails', component: BusDetailsComponent},{path: 'payment', component: PaymentComponent},
  {path: '', component: SearchComponent}];



@NgModule({
  imports: [
    RouterModule.forChild(myrouchildRoute),FormsModule,
    CommonModule,
    MatButtonModule, MatCheckboxModule, 
    MatSelectModule, MatCardModule, MatFormFieldModule,MatDatepickerModule,MatInputModule, MatNativeDateModule, 
    MatExpansionModule,MatIconModule,MatTabsModule,NgbModule
  ],
  declarations: [
    SearchComponent,   
    BusDetailsComponent,
    PaymentComponent,    
    CreditcardComponent,
    InternetbankingComponent,
    CodComponent,
    BillcalulatorPipe,
    BillwithGSTcalculatorPipe
  ]
})
export class BusModule { }
