import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './state/root.reducer';
import { HttpClientModule } from '@angular/common/http';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './state/entities/app-entity-metadata';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
	root: 'http://localhost:3000/',
	timeout: 3000, // request timeout
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(
			[
				{
					path: 'all_employees',
					component: AllEmployeesComponent,
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
		StoreModule.forRoot(reducers, {
			metaReducers: !environment.production ? [] : [],
			runtimeChecks: {
				strictActionImmutability: true,
				strictStateImmutability: true,
			},
		}),
		EffectsModule.forRoot([]),
		EntityDataModule.forRoot(entityConfig),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
	bootstrap: [AppComponent],
})
export class AppModule {}
