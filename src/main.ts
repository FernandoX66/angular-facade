import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserComponent } from './components/user.component';
import { appConfig } from './app.config';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserComponent],
  template: `
    <app-user></app-user>
  `,
})
export class App {}

bootstrapApplication(App, appConfig);
