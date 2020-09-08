import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HoverService {
  private subject = new Subject<string>();
  hoveredLink$ = this.subject.asObservable();

  constructor() {
  }

  hover(path: string) {
    this.subject.next(path);
  }
}
