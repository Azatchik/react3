import React from 'react';
import Layout from "../components/elements/Layout/Layout";
import {Link} from "react-router-dom";
import Servises from "../components/elements/Sections/Servises/Servises";

const Services = () => {
	return (
		<Layout style={{backgroundColor: 'rgba(19, 61, 141, 1)'}}>
			<Servises />
		</Layout>
	);
};

export default Services;