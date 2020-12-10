import React, { useState } from 'react';

import '../styles/MainContent.css';

const MainContent = () => {
	const [ showFirstListElement, updateshowFirstListElement ] = useState(false);
	const [ showSecondListElement, updateShowSecondListElement ] = useState(false);
	const [ showThirdListElement, updateShowThirdListElement ] = useState(false);
	const [ showFirstText, updateShowFirstText ] = useState(false);
	const [ showSecondText, updateShowSecondText ] = useState(false);
	setTimeout(() => {
		updateShowFirstText(true);
	}, 1000);

	setTimeout(() => {
		updateShowSecondText(true);
	}, 1500);

	setTimeout(() => {
		updateshowFirstListElement(true);
	}, 2000);

	setTimeout(() => {
		updateShowSecondListElement(true);
	}, 2200);

	setTimeout(() => {
		updateShowThirdListElement(true);
	}, 2400);

	return (
		<div className="MainContent">
			<div className="first">
				{showFirstListElement && <p className="slideRight">Presentación</p>}
				{showSecondListElement && <p className="slideRight">Objetivos Deportivos</p>}
				{showThirdListElement && <p className="slideRight">Calendario Competición 2021</p>}
			</div>
			<div className="second">
				{showFirstText && <p className="slideRight">PETER</p>}
				{showSecondText && <p className="slideRight">CONSUEGRA</p>}
			</div>
		</div>
	);
};

export default MainContent;
