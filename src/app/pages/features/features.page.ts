import { RouteMeta } from '@analogjs/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export const routeMeta: RouteMeta = {
  title: 'Analog Features',
  canActivate: [() => true],
};

@Component({
  selector: 'app-feature',
  templateUrl: './features.page.html',
  standalone: true,
  imports: [RouterLink],
  host: { 'collision-id': 'FeaturePageComponent' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FeaturePageComponent {}
