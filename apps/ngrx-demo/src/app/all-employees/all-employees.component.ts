import { Component } from '@angular/core';
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
export class AllEmployeesComponent {
	employees$: Observable<Employee[]> | undefined;

	constructor(private employeeService: EmployeeService) {
		this.employees$ = this.employeeService.getAll();
		this.employeeService.entities$.subscribe((data) => console.log(data));
	}
}
