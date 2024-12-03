import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterOutlet, Routes, withComponentInputBinding } from '@angular/router';

export const routes: Routes = [
	{
		path: 'protocol',
		loadChildren: () => import('./protocol-component').then((m) => m.protocolRoutes),
	},
];

@Component({
	selector: 'app-root',
	template: `
		<h1>Protocol Route Input</h1>

		<nav>
			<ul>
				<li><a routerLink="protocol">protocol home</a></li>
				<li><a routerLink="protocol/10">protocol 10</a></li>
			</ul>
		</nav>
		<router-outlet></router-outlet>
	`,
	imports: [RouterLink, RouterOutlet],
})
export class App {}

bootstrapApplication(App, {
	providers: [provideRouter(routes, withComponentInputBinding())],
});
