import { JSX } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import './App.css';
import './index.css';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/:lat?/:lng?' element={<Home />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
