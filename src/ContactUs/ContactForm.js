import React, { useState } from 'react';

export default function ContactForm() {
	const [message, setMessage] = useState({
		name: '',
		email: '',
		text: '',
	});
	function handleChange(event) {
		setMessage((prevMessage) => {
			return {
				...prevMessage,
				[event.target.name]: event.target.value,
			};
		});
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<div className="contact-form-container">
			<h3 className="contact-form-title">Contact Us</h3>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={handleChange}
					value={message.name}
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={handleChange}
					value={message.email}
				/>
				<label htmlFor="text">Message:</label>
				<textarea
					id="text"
					name="text"
					onChange={handleChange}
					value={message.text}
				/>
				<button id="submit-button">Send Message</button>
			</form>
		</div>
	);
}
