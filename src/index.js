import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/App.css"
import "./styles/fonts.css"
import {BrowserRouter} from "react-router-dom";

const home = ReactDOM.createRoot(document.getElementById('essence-app'));
home.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

