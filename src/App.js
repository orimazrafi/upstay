import './App.css';
import RecursiveTree from './components/RecursiveTree';
import { navbarData } from './data';

function App() {
	return (
		<div className='app--container'>
			<RecursiveTree data={navbarData} />
		</div>
	);
}

export default App;
