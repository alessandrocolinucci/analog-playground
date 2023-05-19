import { RouteMeta } from '@analogjs/router';
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export const routeMeta: RouteMeta = {
  title: 'Counter Page',
  canActivate: [() => true],
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'collision-id': 'CounterPageComponent' },
})
export default class CounterPageComponent implements OnInit {
  private readonly counterSubject$: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  counter$: Observable<number> = this.counterSubject$.asObservable();

  ngOnInit(): void {
    setInterval(() => this.increment(), 1000);
  }

  incrementClick(): void {
    this.increment();
  }

  private increment(): void {
    this.counterSubject$.next(this.counterSubject$.value + 1);
  }
}
