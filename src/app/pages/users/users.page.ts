import { RouteMeta } from '@analogjs/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/server/models/user';

export const routeMeta: RouteMeta = {
  title: 'Users Page',
  canActivate: [() => true],
};

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, AsyncPipe],
  host: { 'collision-id': 'UsersPageComponent' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersPageComponent {
  private static USERS_URL = 'http://127.0.0.1:5173/api/v1/users';
  private readonly httpService = inject(HttpClient);

  readonly users$: Observable<User[]> = this.httpService.get(
    UsersPageComponent.USERS_URL
  ) as Observable<User[]>;
}
