import React from 'react';

export default function Box({ className, children }) {
	return (
		<section className="floating-box">
			<article
				className={`floating-box__content-wrapper ${
					className ? className : ''
				}`}
			>
				{children}
			</article>
		</section>
	);
}
