import React from 'react';
import HomeImage from '../../assets/home_image.png';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Box from '../UI/Box';

export default function Welcome() {
	return (
		<Box>
			<div className="image-container">
				<img src={HomeImage} alt="A necklace" />
			</div>
			<article className="common-content">
				<h1 className="common-content-heading ">Welcome</h1>
				<p className="common-content-paragraph">
					We're glad you are here! Sign up to start
				</p>

				<Link to={'sign-in'}>
					<Button type={'button'}>Get Started</Button>
				</Link>
			</article>
		</Box>
	);
}
