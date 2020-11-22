import { Component, OnInit } from '@angular/core';
import { HoverService } from '../hover.service';

@Component({
  selector: 'app-resources',
  template: `
    <div>
      <p>
        resources works!
      </p>

      <nav>
        <a mat-raised-button 
          color="accent" 
          routerLink="/community"
          (mouseover)="hoverService.hover('community')">Community</a>
      </nav>

    </div>
  `,
  styles: [`
    :host {
      text-align: center;
    }

  `],
})
export class ResourcesComponent implements OnInit {

  constructor(public hoverService: HoverService) {
  }

  ngOnInit(): void {
  }

}
