import { Injectable } from '@angular/core';
import { NoPreloading, PreloadAllModules } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { BehaviorSubject, Subject } from 'rxjs';
import { PreloadHoveredModules } from './preload-hovered.service';
import { PreloadSelectedModules } from './preload-selected.service';

@Injectable({
  providedIn: 'root',
})
export class HoverService {
  private subject = new Subject<string>();
  hoveredLink$ = this.subject.asObservable();

  hover(path: string) {
    this.subject.next(path);
  }

}
