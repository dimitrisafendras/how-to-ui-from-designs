import React from 'react';
import {Header} from '../header';
import {Main} from '../main';
import {Sidebar} from '../sidebar';
import './AppLayout.css';

export const AppLayout = ({children}) => {
	return (
		<>
			<div className='AppLayout'/>
			<div className='AppLayout2'/>
			<div className='AppLayout3'>
				{children}
			</div>
			<div className='AppLayout4'>
				{children}
			</div>
			<div className='AppLayout5'>
				{children}
			</div>
			<div className='AppLayout6'>
				<Header className='HeaderCell'/>
				<Main className='MainCell'/>
				<Sidebar className='SidebarCell'/>
			</div>
		</>
	);
};