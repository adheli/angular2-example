import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { PrimeModuleComponent } from './prime-module.component';
import { TableExampleComponent } from './table-example/table-example.component';

@NgModule({
  imports: [
    CommonModule, DataTableModule, SharedModule
  ],
  declarations: [
    PrimeModuleComponent, TableExampleComponent
  ],
  exports: [
    PrimeModuleComponent
  ]
})
export class PrimeModuleModule { }
