import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadSelectedModules implements PreloadingStrategy {
  preload(route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }

  constructor() {
  }
}
