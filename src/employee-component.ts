import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
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
		<p>First Name: {{ employee()?.firstName }}</p>
		<p>Last Name: {{ employee()?.lastName }}</p>
		<p>Email: {{ employee()?.email }}</p>
		<p>Phone: {{ employee()?.phone }}</p>
		<p>Age: {{ employee()?.age }}</p>
	`,
})
export class EmployeeComponent {
	id = input<number | undefined>();
	route = inject(ActivatedRoute);
	employeeId = this.route.snapshot.params['id'];
	employeeService = inject(EmployeeService);
	result = this.employeeService.findEmployeeById(this.employeeId);
	employee = computed(() => this.result()?.data);
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
