import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleDrawerStatus, toggleMobileDrawerStatus } from './state/reducers/preferences.reducer';
import { RootState } from './state/root.reducer';

@Component({
	selector: 'nx-projects-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'ngrx-demo';
	drawerOpen$ = this.store.select((state) => state.preferencesState?.drawerOpen);
	mobileDrawerOpen$ = this.store.select((state) => state.preferencesState?.mobileDrawerOpen);

	constructor(private store: Store<RootState>) {}

	changeDrawerStatus() {
		this.store.dispatch(toggleDrawerStatus());
	}

	changeMobileDrawerStatus() {
		this.store.dispatch(toggleMobileDrawerStatus());
	}

	ngOnInit(): void {}
}
