import { Component, OnInit } from '@angular/core';
import { HoverService } from '../hover.service';
import { PreloadSelectedModules } from '../preload-selected.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

@Component({
  selector: 'app-home',
  template: `
    <div>
      home works!
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
