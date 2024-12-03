import { Component, input } from '@angular/core';
import { Routes } from '@angular/router';

/**
 * A component the shows selected Protocol Information, Protocol Enrollments and a button to enroll new patients to this Protocol
 *
 * @author Pavan Kumar Jadda
 * @since 2.0.0
 */
@Component({
	selector: 'app-protocol',
	imports: [],
	template: ` id: {{ id() }} `,
})
export class ProtocolComponent {
	id = input<number>();

	constructor() {
		console.log('ProtocolComponent id:', this.id());
	}
}

//Protocol Routes
export const protocolRoutes: Routes = [
	{
		path: '',
		title: 'Protocol | PRES',
		component: ProtocolComponent,
	},
	{
		path: ':id',
		title: 'Protocol | PRES',
		component: ProtocolComponent,
	},
];
