import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/pages/CreateAccount';
import Message from './components/pages/Message';
import Welcome from './components/pages/Welcome';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="sign-in" element={<CreateAccount />} />
				<Route path="sign-in-success" element={<Message />} />
				<Route path="*" element={<Navigate to={'/'} />} />
			</Routes>
		</>
	);
}

export default App;
