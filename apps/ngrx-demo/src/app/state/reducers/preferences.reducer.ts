import { createAction, createReducer, on } from '@ngrx/store';

export interface PreferencesState {
	drawerOpen: boolean;
	mobileDrawerOpen: boolean;
}

/**
 * Initialize the state
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
const initialState: PreferencesState = { drawerOpen: true, mobileDrawerOpen: false };

/**
 * Define Protocol Document Search Form Actions
 *
 * @author Pavan Kumar Jadda
 * @since 0.1.0
 */
export const toggleDrawerStatus = createAction('preferences/toggleDrawerStatus');
export const toggleMobileDrawerStatus = createAction('preferences/toggleMobileDrawerStatus');

export const preferencesReducer = createReducer(
	initialState,
	on(toggleDrawerStatus, (state) => ({ ...state, drawerOpen: !state.drawerOpen })),
	on(toggleMobileDrawerStatus, (state) => ({ ...state, mobileDrawerOpen: !state.mobileDrawerOpen }))
);
