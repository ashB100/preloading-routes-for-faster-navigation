import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuicklinkModule } from 'ngx-quicklink';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [],
  imports: [
    QuicklinkModule,
    MaterialModule
  ],
  exports: [
    QuicklinkModule,
    MaterialModule
  ]
})
export class SharedModule { }
