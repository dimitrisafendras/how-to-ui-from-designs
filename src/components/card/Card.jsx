import React from 'react';
import Gold from './gold.svg'
import './Card.css';

export const Card = ({className}) =>
	<div className={`Card9 ${className}`}>
		<div className='Indicator9'/>
		<img src={Gold} className='Icon9'/>
		<div className='TextContainer9'>
			<div className='InnerTextContainer9'>
				<div className='InnerTextCommon InnerText9'>
					123456789123456
				</div>
				<div className='InnerTextCommon InnerNumber9'>
					12
				</div>
			</div>
			<div className='Amount9'>
				123456789123456789
			</div>
		</div>
	</div>;
	