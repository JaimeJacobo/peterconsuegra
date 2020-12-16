import './App.css';
import './wickedcss.css';
import ReactFullpage from '@fullpage/react-fullpage';

//Components
import Home from './components/Home';
import Presentacion from './components/Presentacion';

// require('dotenv').config();

const App = () => {

	const anchors = [
		'home',
		'presentacion',
		'objetivos-deportivos',
		'calendario-competicion-2021',
		'compromiso',
		'repercusion-general',
		'repercusion-instagram22',
		'propuesta'
	];

	const anchorNames = [
		'Home',
		'Presentación',
		'Objetivos Deportivos',
		'Calendario Competición 2021',
		'Compromiso',
		'Repercusión | General',
		'Repercusión | Instagram',
		'Propuesta'
	];
	return (
		<div className="App">
			<ReactFullpage
				//fullpage options
				licenseKey={process.env.REACT_APP_FULLPAGE_ID}
				scrollingSpeed={1000}
				anchors={anchors}
				navigation
				navigationTooltips={anchorNames}
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							<div className="section">
								<Home />
							</div>
							<div className="section">
								<Presentacion />
							</div>
							<div className="section">
								<p>Objetivos Deportivos</p>
							</div>
							<div className="section">
								<p>Calendario Competición 2021</p>
							</div>
							<div className="section">
								<p>Compromiso</p>
							</div>
							<div className="section">
								<p>Repecursión | General</p>
							</div>
							<div className="section">
								<p>Repecursión | Instagram</p>
							</div>
							<div className="section">
								<p>Propuesta</p>
							</div>
						</ReactFullpage.Wrapper>
					);
				}}
			/>
		</div>
	);
};

export default App;
