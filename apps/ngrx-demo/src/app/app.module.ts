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

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
		StoreModule.forRoot(reducers, {
			metaReducers: !environment.production ? [] : [],
			runtimeChecks: {
				strictActionImmutability: true,
				strictStateImmutability: true,
			},
		}),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
