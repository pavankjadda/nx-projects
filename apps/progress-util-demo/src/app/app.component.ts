import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProgressUtil } from './util/progress-util';
import { Status } from './model/status.enum';
import { UpdateStateUtils } from './util/update-state-util';
import { createAsyncState } from '@ngneat/loadoff';

@Component({
	selector: 'nx-projects-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	title = 'progress-util-demo';
	loadingState$ = ProgressUtil.initialize();
	loadingState = UpdateStateUtils.initializeState();
	status: typeof Status = Status;
	state = createAsyncState({ loading: false, complete: false, res: undefined });

	ngOnInit(): void {
		this.loadingState = UpdateStateUtils.markLoading();
		this.state = createAsyncState({ loading: true, complete: false, res: undefined });
		ProgressUtil.markLoading(this.loadingState$);
		setTimeout(() => {
			this.state = createAsyncState({ loading: false, complete: false, res: undefined });
			ProgressUtil.markSuccess(this.loadingState$);
			this.loadingState = UpdateStateUtils.markSuccess(this.loadingState);
		}, 3000);
	}

}
