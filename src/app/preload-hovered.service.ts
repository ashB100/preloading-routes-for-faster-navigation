import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HoverService } from './hover.service';

@Injectable({
  providedIn: 'root',
})
export class PreloadHoveredModules implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.hoverService.hoveredLink$
      .pipe(
        map(link => route.path.includes(link) ? load() : of(null)),
      );
  }

  constructor(private hoverService: HoverService) {
  }
}
