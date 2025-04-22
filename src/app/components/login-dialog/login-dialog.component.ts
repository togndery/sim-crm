import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  template: `
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <!-- Dialog Container -->
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <!-- Dialog Header -->
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-xl font-semibold text-gray-800">Login</h2>
        </div>
        
        <!-- Dialog Body -->
        <div class="px-6 py-4">
          <form (ngSubmit)="onLogin()" class="space-y-4">
            <!-- Username Field -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input 
                type="text" 
                id="username" 
                [(ngModel)]="username" 
                name="username" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your username"
              >
            </div>
            
            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                [(ngModel)]="password" 
                name="password" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter your password"
              >
            </div>
          </form>
        </div>
        
        <!-- Dialog Footer -->
        <div class="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end space-x-3">
          <button 
            type="button" 
            (click)="onCancel()"
            class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            (click)="onLogin()"
            class="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class LoginDialogComponent {
  username: string = '';
  password: string = '';
  @Output() close = new EventEmitter<any>();

  constructor(private router: Router) {}

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onCancel();
  }

  onLogin() {
    // Here you would typically call your authentication service
    if(this.username === 'admin' && this.password === 'admin'){
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to dashboard
      this.router.navigate(['/dashboard']);
    }
    console.log('Login attempt:', { username: this.username, password: this.password });
    this.close.emit({ username: this.username, password: this.password });
  }

  onCancel() {
    this.close.emit();
  }
} 