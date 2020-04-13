import React from 'react';
import {Card} from '../card';
import {MainLayout} from '../layouts';
import './Main.css';

export const Main = () => {
	return (
		<div className='Main'>
			<MainLayout>
				<Card className='FirstCard'/>
				<Card className='SecondCard'/>
				<Card className='ThirdCard'/>
				<Card className='FourthCard'/>
				<Card className='FifthCard'/>
			</MainLayout>
		</div>
	);
};