import { RecoilRoot } from 'recoil';
import { CardList, Cards } from './components/Cards';
import { Container } from './components/grid/Container';
import './index.css';

function App() {
	return (
		<RecoilRoot>
			<Container>
				<Cards />
			</Container>
		</RecoilRoot>
	);
}

export default App;
