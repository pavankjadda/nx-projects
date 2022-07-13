/**
 * Contains utility methods for {@link ProgressState}
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
import { ProgressState } from "../model/progress-state";

export class ProgressStateUtil {
  /**
   * Initialize Loading or Update ProgressState
   *
   * @param progressState Object to initialize
   * @return ProgressState Updated State Object
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  static markLoading(progressState: ProgressState): ProgressState {
    return { ...progressState, loading: true, success: false, error: false, message: '' };
  }

  /**
   * Initialize Loading or Update ProgressState
   *
   * @return Updated State Object
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  static initializeState(): ProgressState {
    return { loading: false, success: false, error: false, complete: false, message: '' };
  }

  /**
   * Update state as success
   *
   * @return ProgressState Updated State Object
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  static markSuccess(progressState: ProgressState, message?: string): ProgressState {
    return { ...progressState, loading: false, success: true, error: false, complete: true, message: message || '' };
  }

  /**
   * Update state as failure or error
   *
   * @return ProgressState Updated State Object
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  static markError(progressState: ProgressState, message?: string): ProgressState {
    return { ...progressState, loading: false, success: false, error: true, complete: true, message: message || '' };
  }
}
