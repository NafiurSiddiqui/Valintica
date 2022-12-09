import React from 'react';
import Button from './UI/Button';
import userIcon from '../assets/form_input-user-icon.svg';
import mailIcon from '../assets/form_input-mail-icon.svg';
import lockIcon from '../assets/form_input-lock-icon.svg';

export default function Form() {
	const submitHandler = () => {};
	return (
		<>
			<h1>Create Account</h1>

			<form action="#" onSubmit={submitHandler}>
				<label htmlFor="username">
					<span>
						<img src={userIcon} alt="user icon" />
					</span>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
					/>
				</label>
				<label htmlFor="email">
					<span>
						<img src={mailIcon} alt="user icon" />
					</span>
					<input type="email" name="email" id="email" placeholder="Email" />
				</label>
				<label htmlFor="password">
					<span>
						<img src={lockIcon} alt="user icon" />
					</span>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
					/>
				</label>
				<label htmlFor="confirmpassword">
					<span>
						<img src={lockIcon} alt="user icon" />
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
