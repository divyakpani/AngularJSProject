import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetbankingComponent } from './internetbanking.component';

describe('InternetbankingComponent', () => {
  let component: InternetbankingComponent;
  let fixture: ComponentFixture<InternetbankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetbankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
