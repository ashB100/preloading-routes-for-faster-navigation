import { Component, OnInit } from '@angular/core';
import { HoverService } from '../hover.service';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/docs" routerLinkActive="active" (mouseover)="preloadRoute('docs')">Docs</a>
        <a routerLink="/resources" routerLinkActive="active" (mouseover)="preloadRoute('resources')">Resources</a>

        <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
            <mat-icon>menu</mat-icon>
        </button>

        <mat-menu #menu="matMenu">
            <button mat-menu-item color="accent">
                <a routerLink="/featureA" (mouseover)="preloadRoute('featureA')">Feature A</a>
            </button>
            <button mat-menu-item color="accent">
                <a routerLink="/featureB" (mouseover)="preloadRoute('featureB')">Feature B</a>
            </button>
            <button mat-menu-item color="accent">
                <a routerLink="/featureC">Feature C</a>
            </button>
        </mat-menu>
    </nav>
  `,
  styles: [`
      nav {
          display: flex;
          flex-wrap: wrap;
          background-color: var(--primary-color);
          color: white;
          justify-content: center;
          align-items: center;
          padding: 0.5em 0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
      }

      a {
          margin: 0 2em;
          text-decoration: none;
          color: inherit;
          padding: 0.2em 0.4em;
          box-shadow: 0 0 0 goldenrod;
          transition: box-shadow 0.1s ease-in;
      }

      a.active {
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
      }
  `],
})
export class NavComponent {

  constructor(private hoverService: HoverService) {
  }

  preloadRoute(path) {
    this.hoverService.hover(path);
  }

}
