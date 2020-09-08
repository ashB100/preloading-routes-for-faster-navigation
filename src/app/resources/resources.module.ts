import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ResourcesRoutingModule,
  ],
})
export class ResourcesModule {
}
