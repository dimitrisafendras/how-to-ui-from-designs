import React from 'react';
import './AppLayout.css';

export const AppLayout = ({children}) => {
	return (
		<>
			<div className='AppLayout1'>
				{children}
			</div>
			<div className='AppLayout2'>
				{children}
			</div>
		</>

	);
};