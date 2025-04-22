import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-orange-600">About Us</h1>
          <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We are dedicated to providing the best CRM solutions for businesses of all sizes.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-orange-600 mb-4">Our Mission</h2>
            <p class="text-gray-600">
              To empower businesses with innovative CRM tools that drive growth and success.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-orange-600 mb-4">Our Vision</h2>
            <p class="text-gray-600">
              To be the leading provider of customer relationship management solutions worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
