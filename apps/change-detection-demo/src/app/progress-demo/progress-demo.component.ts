import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressStateUtil } from "../utils/ProgressStateUtils";

@Component({
	selector: 'nx-projects-progress-demo',
	template: `
  <h1>Progress Demo</h1>

  <p *ngIf="loadingState.loading">Loading....</p>
  <p *ngIf="!loadingState.loading && loadingState.success">Loaded Successfully.</p>
  <p *ngIf="!loadingState.loading && loadingState.error">Loading failed.</p>
  `,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressDemoComponent implements OnInit {
  loadingState=ProgressStateUtil.initializeState();

	ngOnInit(): void {
    this.loadingState=ProgressStateUtil.markLoading(this.loadingState);
    setTimeout(()=>{
      this.loadingState=ProgressStateUtil.markSuccess(this.loadingState);
    },3000);
  }
}
