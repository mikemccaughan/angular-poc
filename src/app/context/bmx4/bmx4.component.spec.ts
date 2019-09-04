import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmx4Component } from './bmx4.component';

describe('Bmx4Component', () => {
  let component: Bmx4Component;
  let fixture: ComponentFixture<Bmx4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bmx4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bmx4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
