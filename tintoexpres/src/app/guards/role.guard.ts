import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['expectedRole'];

  // Obtener el rol del usuario actual
  const userRole = authService.getUserRole();

  if (userRole && userRole === expectedRole) {
    return true;
  } else {
    router.navigate(['app-access-denied']); // Redirigir si no tiene permisos
    return false;
  }
};
