/**
 * Contains utility methods for {@link ProgressState}
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
import { Status } from '../model/status.enum';
import { ProgressState } from '../model/progress-state';


export class UpdateStateUtils {
	/**
	 * Initialize Loading or Update ProgressState
	 *
	 * @param updateState Object to initialize
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.1.8
	 */
	static markLoading(): ProgressState {
		return { loading: true, status: undefined, message: '' };
	}

	/**
	 * Initialize Loading or Update ProgressState
	 *
	 * @param updateState Object to initialize
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.1.8
	 */
	static initializeState(): ProgressState {
		return { loading: false, status: undefined, message: '' };
	}

	/**
	 * Update state with new information
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.1.8
	 */
	static update(
		updateState: ProgressState,
		loading: boolean,
		status: 'success' | 'error' | undefined,
		message: string,
	): ProgressState {
		return { ...updateState, loading, status, message };
	}

	/**
	 * Update state as success
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static markSuccess(updateState: ProgressState | undefined, message?: string): ProgressState {
		return { loading: false, status: Status.SUCCESS, message: message || '' };
	}

	/**
	 * Update state as failure or error
	 *
	 * @return ProgressState Updated State Object
	 *
	 * @author Pavan Kumar Jadda
	 * @since 1.0.0
	 */
	static markError(updateState: ProgressState | undefined, message?: string): ProgressState {
		return { ...updateState, loading: false, status: Status.ERROR, message: message || '' };
	}
}
