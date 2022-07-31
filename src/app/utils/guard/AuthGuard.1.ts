import { CanActivate, CanActivateChild, Router } from '@angular/router';

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
}
