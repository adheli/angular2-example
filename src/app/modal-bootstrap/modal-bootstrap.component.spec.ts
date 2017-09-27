import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBootstrapComponent } from './modal-bootstrap.component';

describe('ModalBootstrapComponent', () => {
  let component: ModalBootstrapComponent;
  let fixture: ComponentFixture<ModalBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
