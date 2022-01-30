import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Employee {
	name?: string;
	age?: number;
}

@Component({
	selector: 'nx-projects-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'change-detection-demo';
	employee: Employee = {
		name: 'John',
		age: 20,
	};
	employee$ = new BehaviorSubject<Employee>({
		name: 'Caroline',
		age: 25,
	});

	constructor() {
		setTimeout(() => {
			this.employee = {
				...this.employee,
				name: 'Steve',
				age: 2000,
			};
		}, 5000);
	}

	changeEmployeeAge() {
		this.employee$.next({
			name: 'Diana',
			age: new Date().getTime() / 100000000000,
		});
	}
}
