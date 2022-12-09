import React from 'react';
import formImage from '../../assets/form_image.png';
import Form from '../Form';
import Box from '../UI/Box';

export default function CreateAccount() {
	return (
		<Box>
			<img src={formImage} alt="A necklace" />
			<article className="common-content">
				<h1 className="common-content-heading ">Welcome</h1>
				<p className="common-content-paragraph">
					We're glad you are here! Sign up to start
				</p>
			</article>
			<Form />
		</Box>
	);
}
