export interface ProgressState {
	loading: boolean;
	status: 'error' | 'success' | undefined;
	message: string;
}
