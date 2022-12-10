import React from 'react';
import Button from './UI/Button';
import userIcon from '../assets/form_input-user-icon.svg';
import mailIcon from '../assets/form_input-mail-icon.svg';
import lockIcon from '../assets/form_input-lock-icon.svg';

export default function Form() {
	const submitHandler = () => {};
	return (
		<>
			<form action="#" onSubmit={submitHandler} className="form">
				<label htmlFor="username">
					<span className="form__image-container">
						<img
							src={userIcon}
							alt="user icon"
							className="form__image-container__image"
						/>
					</span>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
					/>
				</label>
				<label htmlFor="email">
					<span className="form__image-container">
						<img
							src={mailIcon}
							alt="user icon"
							className="form__image-container__image"
						/>
					</span>
					<input type="email" name="email" id="email" placeholder="Email" />
				</label>
				<label htmlFor="password">
					<span className="form__image-container">
						<img
							src={lockIcon}
							alt="user icon"
							className="form__image-container__image"
						/>
					</span>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</label>
				<label htmlFor="confirmpassword">
					<span className="form__image-container">
						<img
							src={lockIcon}
							alt="user icon"
							className="form__image-container__image"
						/>
					</span>
					<input
						type="password"
						name="confirmpassword"
						id="confirmpassword"
						placeholder="Confirm password"
					/>
				</label>

				<Button type={'submit'}>Create Account</Button>
			</form>
		</>
	);
}
