import { ActionReducerMap } from '@ngrx/store';
import { preferencesReducer, PreferencesState } from './reducers/preferences.reducer';

export interface RootState {
	preferencesState: PreferencesState;
}

export const reducers: ActionReducerMap<RootState> = {
	preferencesState: preferencesReducer,
};
