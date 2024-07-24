import React from 'react';
import Layout from "../components/elements/Layout/Layout";
import News from "../components/elements/Sections/News/News";
import History from "../components/elements/Sections/History/History";
import Publications from "../components/elements/Sections/Publications/Publications";
import Projects from "../components/elements/Sections/Projects/Projects";
import Benefit from "../components/elements/Sections/Benefit/Benefit";
import Home from "../components/elements/Sections/Home/Home";

const Main = () => {
	return (
		<Layout style={{position: 'absolute'}}>
			<Home />
			<News />
			<History />
			<Publications />
			<Projects />
			<Benefit />
		</Layout>
	);
};

export default Main;