import React from 'react';
import formImage from '../../assets/form_image.png';
import Form from '../Form';
import Box from '../UI/Box';

export default function CreateAccount() {
	return (
		<Box>
			<div className="image-container">
				<img src={formImage} alt="A necklace" />
			</div>

			<article className="common-content form-content">
				<h1 className="common-content-heading form-heading">Create Account </h1>
				<p className="common-content-paragraph form-paragraph">
					Go ahead and sign up, let everyone know how awesome you are!
				</p>
				<Form />
			</article>
		</Box>
	);
}
