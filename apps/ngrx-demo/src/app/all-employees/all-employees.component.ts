import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee/employee.service';

@Component({
	selector: 'nx-projects-all-employees',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './all-employees.component.html',
	styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent implements OnInit {
	loading$ = this.employeeService.loading$;
	employees$ = this.employeeService.employees$;

	constructor(private employeeService: EmployeeService) {}

	ngOnInit(): void {
		this.employeeService.update({ id: '1', firstName: 'Jack', lastName: 'Ryan' });
	}
}
