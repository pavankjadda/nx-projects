import { ActionReducerMap } from '@ngrx/store';
import { preferencesReducer, PreferencesState } from './reducers/preferences.reducer';
import { EntityState } from '@ngrx/entity';
import { Employee } from '../employee/employee';
import { employeeReducer } from './reducers/employee.reducer';

export interface RootState {
	preferencesState: PreferencesState;
	employeeState: EntityState<Employee>;
}

export const reducers: ActionReducerMap<RootState> = {
	preferencesState: preferencesReducer,
	employeeState: employeeReducer,
};
