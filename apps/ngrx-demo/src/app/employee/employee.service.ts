import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	constructor(private httpClient: HttpClient) {}

	getEmployees() {
		return this.httpClient.get<Employee[]>('./assets/employees.json');
	}
}
