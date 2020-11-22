import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Preloading Routes for Faster Navigation</h1>
    </header>

    <app-nav></app-nav>

    <main>
      <router-outlet></router-outlet>
      <mat-spinner [diameter]="50" *ngIf="loading"></mat-spinner>
    </main>

    <footer>
      <p>By @ashnita01</p>
    </footer>
  `,
  styles: [`
    header {
      font-size: 1.5em;
      text-align: center;
      padding-top: 1em;
      height: 150px;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
      url('https://images.unsplash.com/photo-1596213252411-8b1ebcac67ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fGtpdHRlbnN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=700&q=60')
      ;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    h1 {
      color: var(--primary-color);
      font-weight: lighter;
      font-size: 1.5em;
      margin: 0;
    }

    main {
      background-color: rgba(200, 130, 30, 0.3);
      height: 100%;
      padding: 2em;
      display: flex;
      flex-direction: column;
      align-items: center;

    }

    footer {
      background-color: var(--primary-color);
      color: white;
      text-align: center;
      padding: 1em 0;
    }

    p {
      margin: 0;
    }

  `],
})
export class AppComponent {
  loading = false;

  constructor(router: Router) {
    router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd ||
            event instanceof NavigationCancel || 
            event instanceof NavigationError) {
          this.loading = false;
        }
      },
    );
  }
}
