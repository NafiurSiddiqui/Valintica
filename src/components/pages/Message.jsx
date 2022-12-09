import React from 'react';
import Box from '../UI/Box';
import loginImage from '../../assets/login-success__image.png';
export default function Message() {
	return (
		<Box>
			<div className="image-wrapper">
				{/* <img src={loginImage} alt="a necklace" /> */}
			</div>
			<article className="login-success-text">
				<h1>Successfully Logged In</h1>
				<span className="user-email">useremail@gmail.com</span>
			</article>
		</Box>
	);
}
