import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <div class="bg-orange-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Welcome to Our CRM Platform
          </h1>
          <p class="mt-6 text-xl max-w-2xl mx-auto">
            Streamline your customer relationships and boost your business growth with our powerful CRM solution.
          </p>
          <div class="mt-10">
            <a routerLink="/login" 
               class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 md:py-4 md:text-lg md:px-10">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="mx-auto h-12 w-12 text-orange-600">
              <svg class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Customer Management</h3>
            <p class="mt-2 text-base text-gray-500">Efficiently manage all your customer relationships in one place.</p>
          </div>
          <div class="text-center p-6">
            <div class="mx-auto h-12 w-12 text-orange-600">
              <svg class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Analytics & Reports</h3>
            <p class="mt-2 text-base text-gray-500">Get valuable insights with our comprehensive analytics tools.</p>
          </div>
          <div class="text-center p-6">
            <div class="mx-auto h-12 w-12 text-orange-600">
              <svg class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Fast & Reliable</h3>
            <p class="mt-2 text-base text-gray-500">Experience lightning-fast performance and reliable service.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
