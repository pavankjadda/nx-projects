import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
	selector: 'nx-projects-all-employees',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './all-employees.component.html',
	styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent implements OnInit {
	employees: Employee[] = [];
	constructor(private employeeService: EmployeeService) {}

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((data) => {
			this.employees = data;
		});
	}
}
