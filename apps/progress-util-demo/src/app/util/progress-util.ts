/**
 * Contains utility methods for {@link ProgressState}
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
import { BehaviorSubject } from 'rxjs';
import { Status } from '../model/status.enum';
import { ProgressState } from '../model/progress-state';

export class ProgressUtil {
	/**
	 * Initialize Loading or Update ProgressState
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static initialize(): BehaviorSubject<ProgressState> {
		return new BehaviorSubject<ProgressState>({ loading: false, status: undefined, message: '' });
	}

	/**
	 * Initialize Loading or Update ProgressState
	 *
	 * @param updateState$ Behavior Subject that needs to be set to Load or Update
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static markLoading(updateState$: BehaviorSubject<ProgressState>) {
		updateState$.next({ loading: true, status: undefined, message: '' });
	}

	/**
	 * Update state as success
	 *
	 * @param updateState$ Behavior Subject that needs to be set to Load or Update
	 * @param message Success message
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static markSuccess(updateState$: BehaviorSubject<ProgressState>, message?: string) {
		updateState$.next({ loading: false, status: Status.SUCCESS, message: message ?? '' });
	}

	/**
	 * Update state as failure or error
	 *
	 * @param updateState$ Behavior Subject that needs to be set to Load or Update
	 * @param message Success message
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static markError(updateState$: BehaviorSubject<ProgressState>, message?: string) {
		updateState$.next({ loading: false, status: Status.ERROR, message: message ?? '' });
	}

	/**
	 * Update state with new information
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static update(updateState$: BehaviorSubject<ProgressState>, status: 'success' | 'error' | undefined, message?: string) {
		updateState$.next({ loading: false, status: Status.ERROR, message: message ?? '' });
	}
}
