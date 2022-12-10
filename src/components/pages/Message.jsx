import React from 'react';
import Box from '../UI/Box';
import loginImage from '../../assets/login-success__image.png';
export default function Message() {
	return (
		<Box>
			<div className="image-container">
				<img src={loginImage} alt="a necklace" />
			</div>

			<article className="common-content success-content">
				<h1 className="common-content-heading home-heading ">
					Successfully Logged In
				</h1>
				<p className="common-content-paragraph home-paragraph">
					useremail@gmail.com
				</p>
			</article>
		</Box>
	);
}
