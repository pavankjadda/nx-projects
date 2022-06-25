import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService extends EntityCollectionServiceBase<Employee> {
	constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
		super('Employee', serviceElementsFactory);
	}
}
