import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of, Observable } from 'rxjs';

export declare var navigator;

@Injectable({
  providedIn: 'root',
})
export class FastNetworkPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const connection = navigator.connection;
    const slowConnections = ['slow-2g', '2g', '3g'];

    if (connection) {
      if (connection.saveData) {
        return of(null);
      }

      return slowConnections.includes(connection.effectiveType) ? of(null) : load();
    }
  }

  constructor() {
  }
}
