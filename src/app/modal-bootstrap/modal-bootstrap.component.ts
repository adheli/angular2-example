import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-bootstrap',
  templateUrl: './modal-bootstrap.component.html',
  styleUrls: ['./modal-bootstrap.component.css']
})
export class ModalBootstrapComponent implements OnInit {
  @ViewChild('staticModal') public staticModal: ModalDirective;

  constructor() { }

  onModalClick() {
    this.staticModal.show();
  }

  doSomething() {
    console.log('closing modal.....');
    this.staticModal.hide();
  }

  ngOnInit() {
  }

}
