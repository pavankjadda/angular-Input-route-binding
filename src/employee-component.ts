import { Component, inject, input } from '@angular/core';
import { Routes } from '@angular/router';
import { EmployeeService } from './employee.service';

/**
 * A component the shows selected Employee Information, Employee Enrollments and a button to enroll new patients to this Employee
 *
 * @author Pavan Kumar Jadda
 * @since 2.0.0
 */
@Component({
	selector: 'app-employee',
	imports: [],
	template: `
		<hr />
		<h3>Employee Information</h3>
		<p>First Name: {{ employee?.firstName }}</p>
		<p>Last Name: {{ employee?.lastName }}</p>
		<p>Email: {{ employee?.email }}</p>
		<p>Phone: {{ employee?.phone }}</p>
		<p>Age: {{ employee?.age }}</p>
	`,
})
export class EmployeeComponent {
	id = input<number>();
	employee = inject(EmployeeService).findEmployeeById(this.id())().data;

	constructor() {
		console.log('EmployeeComponent id:', this.id());
	}
}

//Employee Routes
export const employeeRoutes: Routes = [
	{
		path: '',
		title: 'Employee | PRES',
		component: EmployeeComponent,
	},
	{
		path: ':id',
		title: 'Employee | PRES',
		component: EmployeeComponent,
	},
];
