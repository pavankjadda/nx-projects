import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeDataService extends DefaultDataService<Employee> {
	constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
		super('Employee', http, httpUrlGenerator);
	}

	override getAll(): Observable<Employee[]> {
		return this.http.get<Employee[]>('http://localhost:3000/employees');
	}
}
