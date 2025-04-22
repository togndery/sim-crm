import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-orange-50">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center text-orange-600 mb-6">Login</h2>
        <form (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label class="block text-gray-700">Username</label>
            <input type="text" [(ngModel)]="username" name="username" 
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
          </div>
          <div>
            <label class="block text-gray-700">Password</label>
            <input type="password" [(ngModel)]="password" name="password" 
                   class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
          </div>
          <button type="submit" 
                  class="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Simple authentication check
    this.username='admin';
    this.password='admin';
    if (this.username && this.password) {
      // Store login state
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
  }
} 