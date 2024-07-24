import React from 'react';
import classes from './PublicationsStyle.module.css'
import PublicationsPost from "./PublicationsPost";

const Publications = () => {

	const posts = [
		{data: '6 декабря 2022 Г.',
			subtitle: 'Et blandit volutpat sed ullamcorper massa.',
			body: 'Nibh lacinia venenatis bibendum eget fermentum semper amet. Sed eu quis sed erat aliquam elementum nec. Pellentesque fringilla nunc.'},
		{data: '6 декабря 2022 Г.',
			subtitle: 'Sollicitudin aliquet lorem sed varius a eget quis.',
			body: 'Mattis sem habitant non vitae scelerisque. Sagittis eleifend id convallis posuere feugiat nibh sed risus et. Id aliquam enim ut ac nunc porttitor.'},
		{data: '6 декабря 2022 Г.',
			subtitle: 'In nulla non mattis facilisi sapien. In sodales.',
			body: 'Sit quis non facilisis posuere. Nec sit auctor nibh integer lacus. Posuere vel amet quam egestas pulvinar dictum nunc tellus vitae. Non amet lacus.'},
		{data: '6 декабря 2022 Г.',
			subtitle: 'Sagittis consequat placerat egestas nunc.',
			body: 'Lobortis vitae in tellus ac fames amet. Magna et in nunc suspendisse eget. Massa ultrices velit turpis orci non gravida praesent in nibh quis.'}]

	return (
		<section className={classes.publications}>
			<div className={classes.publicationsContent}>
				<div className={classes.publicationsTitle}>
					<h4>ПУБЛИКАЦИИ</h4>
					<a href='#'>ВСЕ ПУБЛИКАЦИИ</a>
				</div>
				<div className={classes.publicationsPosts}>
					{posts.map((el, index) =>
						<PublicationsPost
							data={el.data}
							body={el.body}
							subtitle={el.subtitle}
							postIndex={index}
							key={index + 200}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default Publications;