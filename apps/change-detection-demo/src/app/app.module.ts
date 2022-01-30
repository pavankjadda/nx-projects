import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
	declarations: [AppComponent, ChildComponent, Child2Component],
	imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' })],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
