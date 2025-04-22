import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (!isLoggedIn) {
    // Redirect to login if not authenticated
    router.navigate(['/login']);
    return false;
  }
  
  return true;
}; 