import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloadSelectedModules implements PreloadingStrategy {
  connection = typeof window !== 'undefined' ? (navigator as any).connection : undefined;
  slowNetworks = ['slow-2g', '2g', '3g'];
  
  preload(route: Route, load: () => Observable<any>): Observable<any> {
      if (this.slowConnection() || this.saveData()) return of(null);

      return this.isSelectedRoute(route) ? load() : of(null)
  }

  slowConnection(): boolean {
      return this.connection ? this.slowNetworks.includes(this.connection.effectiveType) : false;
  }

  saveData():boolean {
      return this.connection?.saveData;
  }

  isSelectedRoute(route: Route): boolean {
      return route?.data?.preload; 
  }
}
