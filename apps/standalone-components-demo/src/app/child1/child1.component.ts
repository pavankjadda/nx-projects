import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-child1',
	standalone: true,
	imports: [CommonModule],
	template: ` <p>child1 works!</p> `,
	styles: [],
})
export class Child1Component implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
