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
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { appEntityMetadata } from './state/entities/app-entity-metadata';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EmployeeDataService } from './employee/employee-data.service';

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
		EntityDataModule.forRoot({
			entityMetadata: appEntityMetadata,
		}),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [EmployeeDataService],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(entityDataService: EntityDataService, EmployeeDataService: EmployeeDataService) {
		entityDataService.registerService('Employee', EmployeeDataService);
	}
}
