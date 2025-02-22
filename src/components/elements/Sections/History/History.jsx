import React from 'react';
import classes from "./HistoryStyle.module.css";
import history from '../../../../assets/images/SectionHistory/Vector.png'

const History = () => {
	return (
		<section className={classes.history} id='about'>
			<div className={classes.historyContent}>
				<h4>ИСТОРИЯ КОМПАНИИ</h4>
				<p>Congue vel ac parturient placerat vel lectus. Turpis in interdum feugiat enim purus
					venenatis ornare aliquam nunc. Commodo id ac amet purus tortor suscipit congue
					facilisis. Tempus bibendum viverra est vel. Ullamcorper dignissim donec feugiat
					porta. Interdum neque porttitor ultrices feugiat sit nulla ullamcorper nibh amet.
					Imperdiet risus gravida tempus suspendisse nulla aliquam est. Sed quis in
					maecenas vestibulum neque malesuada scelerisque mauris. Pharetra ipsum sapien
					vestibulum fames. Nisl phasellus pellentesque quam risus non orci.</p>

				<p>Risus magna mauris massa gravida turpis vestibulum vulputate libero scelerisque.
					Proin sed quam amet pellentesque rhoncus semper aenean ultrices gravida.
					Tristique scelerisque lorem sed eget integer sed sed. Leo donec mi sagittis ac
					adipiscing diam felis quisque diam. Auctor sed vulputate odio non velit amet. At
					justo porta gravida elementum mi. Neque tellus tellus sit etiam volutpat aliquam
					tincidunt semper. Nibh lobortis commodo sapien sollicitudin sagittis. Turpis erat
					amet volutpat urna quis felis. Lorem mi amet dolor dictum. Facilisis dignissim
					mauris tristique adipiscing molestie eget consectetur nec non. Id elementum nibh
					faucibus enim pharetra faucibus ultrices neque magnis. At cursus accumsan blandit
					tellus nisi tincidunt sit. Lacus mattis mattis nunc tincidunt vitae et.</p>

				<p>Orci augue morbi bibendum ac viverra diam a fermentum. Massa eget porttitor
					tellus aliquam quisque turpis at nunc. Ut tortor quam urna suscipit. Dictumst neque
					tincidunt malesuada facilisi cras urna. In nunc sed ultrices eu parturient aliquam.
					Non lorem facilisis tincidunt est aliquam hac diam. Suspendisse viverra eleifend leo
					facilisis in. Id purus arcu cursus id. Pretium semper id sit arcu id adipiscing. Neque.</p>
			</div>
			<div className={classes.historyIllustration}>
				<img src={history}  alt='HistoryImg'/>
				<ul>
					<li>Etiam hendrerit aliquam mattis mauris at orci.</li>
					<li>Risus integer ultrices tincidunt massa.</li>
					<li>Scelerisque lorem semper facilisi auctor metus eros in. Feugiat.</li>
					<li>Nec id diam varius laoreet volutpat arcu tempus.</li>
				</ul>
			</div>
		</section>
	);
};

export default History;