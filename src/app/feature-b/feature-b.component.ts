import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-b',
  template: `
    <div class="card">
      feature-b works!
    </div>
  `,
  styles: [],
})
export class FeatureBComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
