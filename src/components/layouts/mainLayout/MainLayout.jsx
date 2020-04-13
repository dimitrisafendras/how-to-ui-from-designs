import React from 'react';
import './MainLayout.css';

export const MainLayout = ({children}) => {
	return (
		<div className='MainLayout'>
			{children}
		</div>
	);
};