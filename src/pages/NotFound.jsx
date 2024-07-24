import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh', flexDirection: 'column'}}>
			<h1 style={{textAlign: 'center', color: 'red'}}>Страница не найдена!!!</h1>
			<Link to='/main'
				  style={{padding: '10px 15px',
					  border: 'solid 3px blue',
					  fontSize: '18px',
					  textDecoration: 'none',
					  color: 'black'}}
			>
				НА ГЛАВНУЮ
			</Link>
		</div>
	);
};

export default NotFound;