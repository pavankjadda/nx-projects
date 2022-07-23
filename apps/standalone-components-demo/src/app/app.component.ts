import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';

@Component({
	selector: 'nx-projects-root',
	standalone: true,
	imports: [RouterModule, Child1Component],
	templateUrl: './app.component.html',
})
export class AppComponent {
	title = 'standalone-components-demo';
}
