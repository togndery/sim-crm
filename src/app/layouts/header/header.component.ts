import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  template: `
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <app-logo></app-logo>

          <!-- Navigation -->
          <nav class="flex space-x-8">
            <a routerLink="/" class="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a routerLink="/about" class="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a routerLink="/services" class="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a routerLink="/contact" class="text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </nav>

          <!-- Login Button -->
          <div>
            <a routerLink="/login" class="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
