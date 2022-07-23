import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { bootstrapApplication, BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(
			BrowserModule,
			CommonModule,
			RouterModule.forRoot(routes, {
				anchorScrolling: 'enabled',
				onSameUrlNavigation: 'reload',
				scrollPositionRestoration: 'enabled',
				preloadingStrategy: PreloadAllModules,
				enableTracing: false,
			}),
			FormsModule,
			ReactiveFormsModule,
			BrowserAnimationsModule,
			HttpClientModule,
			HttpClientXsrfModule.withOptions()
		),
		Title,
		DatePipe,
	],
}).catch((err) => console.error(err));
