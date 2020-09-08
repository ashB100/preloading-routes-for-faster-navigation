import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  template: `
    <div class="card">
      <p>
        resources works!
      </p>

      <nav>
        <a mat-stroked-button color="primary" routerLink="/community">Community</a>
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
