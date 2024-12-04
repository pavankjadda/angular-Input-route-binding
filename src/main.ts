import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterLink, RouterOutlet, Routes, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { provideQueryClientOptions } from '@ngneat/query';
import { provideQueryDevTools } from '@ngneat/query-devtools';
import { provideHttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';

export const routes: Routes = [
	{
		path: 'employee',
		loadChildren: () => import('./employee-component').then((m) => m.employeeRoutes),
	},
];

@Component({
	selector: 'app-root',
	template: `
		<h1>Employee Route Input</h1>

		<nav>
			<ul>
				@for (employee of result().data; track employee.id) {
					<li>
						<a routerLink="employee/{{ employee.id }}">Employee: {{ employee.id }}</a>
					</li>
				}
			</ul>
		</nav>
		<router-outlet></router-outlet>
	`,
	imports: [RouterLink, RouterOutlet],
})
export class App {
	result = inject(EmployeeService).findAllEmployees();
}

bootstrapApplication(App, {
	providers: [
		provideRouter(
			routes,
			withComponentInputBinding(),
			withRouterConfig({
				paramsInheritanceStrategy: 'always',
			}),
		),
		provideHttpClient(),
		provideQueryDevTools({ initialIsOpen: false }),
		provideQueryClientOptions({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: true,
					refetchOnMount: false,
					refetchOnReconnect: true,
					staleTime: 600000,
				},
			},
		}),
	],
});
