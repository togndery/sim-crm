import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen bg-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-orange-600">Contact Us</h1>
          <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any questions or inquiries.
          </p>
        </div>

        <div class="mt-16 max-w-2xl mx-auto">
          <form (ngSubmit)="onSubmit()" class="bg-white p-8 rounded-lg shadow-lg">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" [(ngModel)]="formData.name" name="name" required
                       class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" [(ngModel)]="formData.email" name="email" required
                       class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="4" [(ngModel)]="formData.message" name="message" required
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"></textarea>
              </div>
              <div>
                <button type="submit" 
                        class="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-orange-600 mb-4">
              <svg class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-orange-600">Email</h3>
            <p class="mt-2 text-gray-600">your email</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-orange-600 mb-4">
              <svg class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-orange-600">Phone</h3>
            <p class="mt-2 text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="text-orange-600 mb-4">
              <svg class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-orange-600">Address</h3>
            <p class="mt-2 text-gray-600">123 Business Street, Suite 100<br>New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', this.formData);
    // Reset form after submission
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    alert('Thank you for your message! We will get back to you soon.');
  }
}
