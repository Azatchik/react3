import React from 'react';
import classes from './NewsStyle.module.css'
import NewsPost from "./NewsPost";

const News = () => {

	const posts = [
		{data: '29 декабря 2022 Г.',
			title: 'Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.',
			body: 'Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.'},
		{data: '20 декабря 2022 Г.',
			title: 'Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.',
			body: 'Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.'},
		{data: '14 декабря 2022 Г.',
			title: 'Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.',
			body: 'Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.'},
		{data: '29 декабря 2022 Г.',
			title: 'Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.',
			body: 'Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.'}]

	return (
		<section className={classes.news}>
			<div className={classes.newsContent}>
				<div className={classes.newsTitle}>
					<h4>НОВОСТИ</h4>
					<a href='#'>ВСЕ НОВОСТИ</a>
				</div>
				<div className={classes.newsPosts}>
					{posts.map((el, index) =>
						<NewsPost
							data={el.data}
							title={el.title}
							body={el.body}
							postIndex={index}
							key={index + 100}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default News;