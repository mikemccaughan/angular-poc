import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxnComponent } from './bmxn.component';

describe('BmxnComponent', () => {
  let component: BmxnComponent;
  let fixture: ComponentFixture<BmxnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmxnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
