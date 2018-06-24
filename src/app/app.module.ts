import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { routes } from './routes';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
// import { SearchComponent } from './search/search.component';
// import { BusDetailsComponent } from './bus-details/bus-details.component';
// import { PaymentComponent } from './payment/payment.component';
// import { CodComponent } from './cod/cod.component';
// import { CreditcardComponent } from './creditcard/creditcard.component';
// import { InternetbankingComponent } from './internetbanking/internetbanking.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatSelectModule,MatCardModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatIconModule,MatTabsModule} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveComponent } from './validation/reactive/reactive.component';
import { TemplateComponent } from './validation/template/template.component';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';
import { ObservableComponent } from './observable/observable.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
// import { BillcalulatorPipe } from './billcalulator.pipe';
// import { BillwithGSTcalculatorPipe } from './billwith-gstcalculator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,   
    ReactiveComponent,
    TemplateComponent,
    GetComponent,
    PostComponent,
    AlertComponent,
    ObservableComponent,
    LifecycleComponent
    // BillcalulatorPipe,
    // BillwithGSTcalculatorPipe
    // SearchComponent,
    // BusDetailsComponent,
    // PaymentComponent,
    // CodComponent,
    // CreditcardComponent,
    // InternetbankingComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule,ReactiveFormsModule,BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, 
    MatSelectModule, MatCardModule, MatFormFieldModule,MatDatepickerModule,MatInputModule, MatNativeDateModule, 
    MatExpansionModule,MatIconModule, HttpClientModule,MatTabsModule,NgbModule 
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
