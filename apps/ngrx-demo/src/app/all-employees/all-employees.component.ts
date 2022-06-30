import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'nx-projects-all-employees',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './all-employees.component.html',
	styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent implements OnInit {
	loading$: Observable<boolean> | undefined;
	employees$: Observable<Employee[]> | undefined;

	constructor(private employeeService: EmployeeService) {
		this.employees$ = this.employeeService.entities$;
		this.loading$ = this.employeeService.loading$;
	}

	ngOnInit(): void {
		this.employeeService.loaded$.subscribe((loaded) => {
			if (!loaded) {
				this.employeeService.getAll();
			}
		});

		setTimeout(() => {
			this.employeeService.updateOneInCache({ id: '1', firstName: 'Tim', lastName: 'Smith' });
		}, 3000);
	}
}
