import React from 'react';
import './BasicLayout.css';

export const BasicLayout = ({children}) => {
	return (
		<div className='BasicLayout'>
			{children}
		</div>
	);
};
