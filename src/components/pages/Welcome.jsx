import React from 'react';
import HomeImage from '../../assets/home_image.png';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Box from '../UI/Box';

export default function Welcome() {
	return (
		<Box>
			<img src={HomeImage} alt="A necklace" />
			<article className="common-content">
				<h1 className="common-content-heading ">Welcome</h1>
				<p className="common-content-paragraph">
					We're glad you are here! Sign up to start
				</p>

				<Button type={'button'}>
					<Link to={'createAccount'}>Get Started</Link>
				</Button>
			</article>
		</Box>
	);
}
