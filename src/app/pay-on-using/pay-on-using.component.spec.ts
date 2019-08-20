import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOnUsingComponent } from './pay-on-using.component';

describe('PayOnUsingComponent', () => {
  let component: PayOnUsingComponent;
  let fixture: ComponentFixture<PayOnUsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOnUsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOnUsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
