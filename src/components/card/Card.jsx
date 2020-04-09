import React from 'react';
import Gold from './gold.svg'
import './Card.css';

export const Card = () => {
	return (
		<div className='Card'>
			<div className='Icon'></div>
			<div className='TextContainer'>
				<div className='UpperText'>
					<div className='BoldText'></div>
					<div className='Number'></div>
				</div>
				<div className='LowerText' ></div>
			</div>
		</div>
	);
};
