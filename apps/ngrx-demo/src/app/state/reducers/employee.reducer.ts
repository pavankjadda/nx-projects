import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Employee } from '../../employee/employee';
import { createAction, createReducer, on, props } from '@ngrx/store';

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState: EntityState<Employee> = adapter.getInitialState([]);

export const upsertEmployees = createAction('[Employee/API] Upsert Employees', props<{ employees: Employee[] }>());

export const employeeReducer = createReducer(
	initialState,
	on(upsertEmployees, (state, { employees }) => {
		return adapter.upsertMany(employees, state);
	})
);
