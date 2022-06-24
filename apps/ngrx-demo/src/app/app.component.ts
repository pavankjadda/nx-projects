import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleDrawerStatus, toggleMobileDrawerStatus } from './state/reducers/preferences.reducer';
import { RootState } from './state/root.reducer';
import { EmployeeService } from './employee/employee.service';
import { Employee } from './employee/employee';

@Component({
	selector: 'nx-projects-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'ngrx-demo';
	employees: Employee[] = [];
	drawerOpen$ = this.store.select((state) => state.preferencesState?.drawerOpen);
	mobileDrawerOpen$ = this.store.select((state) => state.preferencesState?.mobileDrawerOpen);

	constructor(private store: Store<RootState>, private employeeService: EmployeeService) {}

	changeDrawerStatus() {
		this.store.dispatch(toggleDrawerStatus());
	}

	changeMobileDrawerStatus() {
		this.store.dispatch(toggleMobileDrawerStatus());
	}

	ngOnInit(): void {
		this.employeeService.getEmployees().subscribe((data) => {
			this.employees = data;
		});
	}
}
