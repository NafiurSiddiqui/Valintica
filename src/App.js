import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/pages/CreateAccount';
import Message from './components/pages/Message';
import Welcome from './components/pages/Welcome';

function App() {
	return (
		<>
			<Routes>
				{/* <Route path="/" element={<Welcome />} /> */}
				{/* <Route path="/" element={<CreateAccount />} /> */}
				<Route path="/" element={<Message />} />
			</Routes>
		</>
	);
}

export default App;
