import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

export const routes: Routes = [
  {
    path: 'protocol',
    loadChildren: () =>
      import('./protocol.component').then((m) => m.protocolRoutes),
  },
];
