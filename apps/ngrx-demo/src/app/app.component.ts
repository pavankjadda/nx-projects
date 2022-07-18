import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleDrawerStatus, toggleMobileDrawerStatus } from './state/reducers/preferences.reducer';
import { RootState } from './state/root.reducer';

@Component({
	selector: 'nx-projects-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	drawerOpen$ = this.store.select((state) => state.preferencesState?.drawerOpen);
	mobileDrawerOpen$ = this.store.select((state) => state.preferencesState?.mobileDrawerOpen);

	constructor(private store: Store<RootState>) {}

	changeDrawerStatus() {
		this.store.dispatch(toggleDrawerStatus());
	}

	changeMobileDrawerStatus() {
		this.store.dispatch(toggleMobileDrawerStatus());
	}
}
