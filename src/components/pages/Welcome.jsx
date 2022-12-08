import React from 'react';
import HomeImage from '../../assets/home_image.png';
import Button from '../../utilities/Button';
export default function Welcome() {
	return (
		<section>
			<img src={HomeImage} alt="A necklace" />
			<div className="home-greetings">
				<h1 className="home-greetings-heading">Welcome</h1>
				<p className="home-greetings-paragraph">
					We're glad you are here! Sign up to start
				</p>

				<Button type={'button'}>Get Started</Button>
			</div>
		</section>
	);
}
