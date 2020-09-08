import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <h1>Preloading Routes for Faster Navigation</h1>
    </header>

    <app-nav></app-nav>

    <main>
      <router-outlet>
        <mat-spinner [diameter]="50" *ngIf="loading"></mat-spinner>
      </router-outlet>
    </main>

    <footer>
      <p>iJS Conference London - By Ashnita Bali</p>
    </footer>
  `,
  styles: [`
    :host {
      text-align: center;
    }

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-image: url('https://images.unsplash.com/38/L2NfDz5SOm7Gbf755qpw_DSCF0490.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60');
      background-position: bottom;
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
    }

    footer {
      background-color: var(--primary-color);
      color: white;
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
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      },
    );
  }

}
