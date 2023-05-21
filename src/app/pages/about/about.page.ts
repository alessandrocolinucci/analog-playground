import { RouteMeta } from '@analogjs/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export const routeMeta: RouteMeta = {
  title: 'About',
  meta: [
    {
      name: 'description',
      content: 'About page',
    },
    {
      name: 'og:title',
      content: 'About page',
    },
    {
      name: 'og:description',
      content: 'About page',
    },
  ],
};

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  standalone: true,
  imports: [RouterLink],
  host: { 'collision-id': 'AboutPageComponent' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent {}
