import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Observable } from 'rxjs';
import { EntityCollectionServiceFactory } from '@ngrx/data';

@Component({
	selector: 'nx-projects-all-employees',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './all-employees.component.html',
	styleUrls: ['./all-employees.component.scss'],
})
export class AllEmployeesComponent implements OnInit{
	employees$: Observable<Employee[]> | undefined;
	//employeeService2: EntityCollectionService<Employee>;

	constructor(private employeeService: EmployeeService,entityCollectionServiceFactory: EntityCollectionServiceFactory) {
		this.employees$ = this.employeeService.entities$;
		//this.employeeService2 = entityCollectionServiceFactory.create<Employee>("Employee");
		this.employeeService.entities$.subscribe((data) => console.log(data));
	}

	ngOnInit(): void {
		this.employees$=this.employeeService.entities$;
	}
}
