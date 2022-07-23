// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Home from './home/home';

export function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			{/* END: routes */}
		</>
	);
}

export default App;
