import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeModuleComponent } from './prime-module.component';

describe('PrimeModuleComponent', () => {
  let component: PrimeModuleComponent;
  let fixture: ComponentFixture<PrimeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
