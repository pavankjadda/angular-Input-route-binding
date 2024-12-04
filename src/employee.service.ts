import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { injectQuery } from '@ngneat/query';

export interface Employee {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	age: number;
}

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	httpClient = inject(HttpClient);
	useQuery = injectQuery();

	findAllEmployees() {
		return this.useQuery({
			queryKey: ['all-employees'],
			queryFn: () => {
				return this.httpClient.get<Employee[]>(`https://my-json-server.typicode.com/pavankjadda/typicode-data/employees`);
			},
		}).result;
	}

	findEmployeeById(employeeId: string | number | null | undefined) {
		return this.useQuery({
			queryKey: ['employee', employeeId],
			queryFn: () => {
				return this.httpClient.get<Employee>(`https://my-json-server.typicode.com/pavankjadda/typicode-data/employees/${employeeId}`);
			},
			enabled: !!employeeId,
		}).result;
	}
}
