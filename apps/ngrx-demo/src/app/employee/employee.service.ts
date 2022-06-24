import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { filter } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService extends EntityCollectionServiceBase<Employee> {
	constructor(private httpClient: HttpClient, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
		super('Employee', serviceElementsFactory);
	}

	getEmployees() {
		this.selectors$.count$.pipe(filter((count) => count <= 0)).subscribe(() => {
			this.httpClient.get<Employee[]>('./assets/employees.json').subscribe((value) => {
				this.upsertManyInCache(value);
				value.forEach((value1) => this.upsert(value1));
			});
		});
		return this.entities$;
	}
}
