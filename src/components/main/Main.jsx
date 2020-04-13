import React from 'react';
import './Main.css';
import {Card} from '../card';
import {MainLayout} from '../layouts/mainLayout';

export const Main = () => {
	return (
		<div className='Main'>
			<MainLayout>
				<Card className='SmallCard Tmp'/>
				<Card className='MediumCard Tmp2'/>
				<Card className='MediumCard Tmp2'/>
				<Card className='SmallCard Tmp2'/>
				<Card className='BigCard Tmp'/>
			</MainLayout>
		</div>
	);
};