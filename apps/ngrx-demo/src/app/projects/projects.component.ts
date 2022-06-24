import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'nx-projects-projects',
	template: ` <p>projects works!</p> `,
	styles: [],
})
export class ProjectsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

@NgModule({
	imports: [CommonModule],
	declarations: [ProjectsComponent],
	exports: [ProjectsComponent],
})
export class ProjectsComponentModule {}
