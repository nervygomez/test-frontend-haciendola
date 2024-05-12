import { CanActivateFn, Router } from '@angular/router';
import { isTokenValid } from '../helpers/helpers';
import { inject } from '@angular/core';

export const authTokenGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if (!token || !isTokenValid(token)) {
    const router = inject(Router);
    router.navigate(['/auth']);
    return false;
  }
  return true;
};