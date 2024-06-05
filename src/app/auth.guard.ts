import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const access = route.queryParams['access'];

  if (!eval(access)) {
    location.href = 'login';
  }

  return true;
};
