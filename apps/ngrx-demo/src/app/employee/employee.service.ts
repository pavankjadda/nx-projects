import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmployeeService extends EntityCollectionServiceBase<Employee> {
	employees$: Observable<Employee[]> | undefined;
	constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
		super('Employee', serviceElementsFactory);
		this.employees$ = this.entities$;

		this.loaded$.subscribe((loaded) => {
			if (!loaded) {
				this.getAll();
			}
		});
	}
}
