import React from 'react';
import './Main.css';
import {Card} from '../card';

export const Main = () => {
	return (
		<div className='Main'>
			<div className='MainLayout'>
				<Card className='SmallCard Tmp'/>
				<Card className='MediumCard Tmp2'/>
				<Card className='MediumCard Tmp2'/>
				<Card className='SmallCard Tmp2'/>
				<Card className='BigCard Tmp'/>
			</div>
		</div>
	);
};