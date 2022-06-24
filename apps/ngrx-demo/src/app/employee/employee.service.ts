import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { defaultIfEmpty, filter, isEmpty, tap } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService extends EntityCollectionServiceBase<Employee> {
	constructor(private httpClient: HttpClient, serviceElementsFactory: EntityCollectionServiceElementsFactory) {
		super('Employee', serviceElementsFactory);
	}

	getEmployees() {
		this.entities$.pipe(isEmpty()).subscribe((cacheMiss) => {
			if (cacheMiss) {
				console.log('cache miss');
				this.httpClient.get<Employee[]>('./assets/employees.json').pipe(
					tap((value) => {
						this.upsertManyInCache(value);
					})
				);
			}
			console.log('cache hit');
		});

		return this.entities$;
	}
}
