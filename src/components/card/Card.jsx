import React from 'react';
import Gold from './gold.svg'
import './Card.css';

export const Card = () => {
	return (
		<>
			<div className='Card1'/>
			<div className='Card2'>
				<div className='Icon2'/>
				<div className='TextContainer2'/>
			</div>
			<div className='Card3'>
				<div className='Icon3'/>
				<div className='TextContainer3'>
					<div className='Text3'/>
					<div className='Amount3'/>
				</div>
			</div>
			<div className='Card4'>
				<div className='Icon4'/>
				<div className='TextContainer4'>
					<div className='InnerTextContainer4'>
						<div className='InnerText4'/>
						<div className='InnerNumber4'/>
					</div>
					<div className='Amount4'/>
				</div>
			</div>
			<div className='Card5'>
				<div className='Icon5'/>
				<div className='TextContainer5'>
					<div className='InnerTextContainer5'>
						<div className='InnerText5'/>
						<div className='InnerNumber5'/>
					</div>
					<div className='Amount5'/>
				</div>
			</div>
			<div className='Card6'>
				<div className='Indicator6'/>
				<div className='Icon6'/>
				<div className='TextContainer6'>
					<div className='InnerTextContainer6'>
						<div className='InnerText6'/>
						<div className='InnerNumber6'/>
					</div>
					<div className='Amount6'/>
				</div>
			</div>
			<div className='Card7'>
				<div className='Indicator7'/>
				<div className='Icon7'/>
				<div className='TextContainer7'>
					<div className='InnerTextContainer7'>
						<div className='InnerText7'>
							123456789123456
						</div>
						<div className='InnerNumber7'>
							12
						</div>
					</div>
					<div className='Amount7'>
						123456789123456789
					</div>
				</div>
			</div>
			<div className='Card8'>
				<div className='Indicator8'/>
				<img src={Gold} className='Icon8'/>
				<div className='TextContainer8'>
					<div className='InnerTextContainer8'>
						<div className='InnerText8'>
							123456789123456
						</div>
						<div className='InnerNumber8'>
							12
						</div>
					</div>
					<div className='Amount8'>
						123456789123456789
					</div>
				</div>
			</div>
			<div className='Card9'>
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
			</div>
		</>
	);
};
