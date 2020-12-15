import React, { useState } from 'react';

import '../styles/MainContent.css';

const MainContent = () => {
	const [ showFirstListElement, updateshowFirstListElement ] = useState(false);
	const [ showSecondListElement, updateShowSecondListElement ] = useState(false);
	const [ showThirdListElement, updateShowThirdListElement ] = useState(false);
	const [ showForthListElement, updateShowForthListElement ] = useState(false);
	const [ showFifthListElement, updateShowFifthListElement ] = useState(false);
	const [ showSixthListElement, updateShowSixthListElement ] = useState(false);
	const [ showSeventhListElement, updateShowSeventhListElement ] = useState(false);

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

	setTimeout(() => {
		updateShowForthListElement(true);
	}, 2600);

	setTimeout(() => {
		updateShowFifthListElement(true);
	}, 2800);

	setTimeout(() => {
		updateShowSixthListElement(true);
	}, 3000);

	setTimeout(() => {
		updateShowSeventhListElement(true);
	}, 3200);

	return (
		<div className="MainContent">
			<div className="first">
				<ol>
					{showFirstListElement && (
						<li className="slideRight">
							<a href="#presentacion">Presentación</a>
						</li>
					)}
					{showSecondListElement && (
						<li className="slideRight">
							<a href="#objetivos-deportivos">Objetivos Deportivos</a>
						</li>
					)}
					{showThirdListElement && (
						<li className="slideRight">
							<a href="#calendario-competicion-2021">Calendario Competición 2021</a>
						</li>
					)}
					{showForthListElement && (
						<li className="slideRight">
							<a href="#compromiso">Compromiso</a>
						</li>
					)}
					{showFifthListElement && (
						<li className="slideRight">
							<a href="#repercusion-general">Repecursión | General</a>
						</li>
					)}
					{showSixthListElement && (
						<li className="slideRight">
							<a href="#repercusion-instagram">Repecursión | Instagram</a>
						</li>
					)}
					{showSeventhListElement && (
						<li className="slideRight">
							<a href="#propuesta">Propuesta</a>
						</li>
					)}
				</ol>
			</div>
			<div className="second">
				{showFirstText && <p className="slideRight">PETER</p>}
				{showSecondText && <p className="slideRight">CONSUEGRA</p>}
			</div>
		</div>
	);
};

export default MainContent;
