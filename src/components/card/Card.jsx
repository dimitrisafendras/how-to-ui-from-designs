import React from 'react';
import Gold from './gold.svg'
import './Card.css';

export const Card = ({className}) => {
	return (
		<div className={`Card ${className}`}>
			<div className='Indicator'/>
			<img src={Gold} className='Icon'></img>
			<div className='TextContainer'>
				<div className='UpperText'>
					<div className='BoldText'>
						Textlgjnsl jvnsldjn
					</div>
					<div className='Number'>
						12
					</div>
				</div>
				<div className='LowerText' >
					Blakjdfgk lbsgk lbfsklb
				</div>
			</div>
		</div>
	);
};
