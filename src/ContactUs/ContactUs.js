import React from 'react';
import Navbar from '../Home/Navbar';
import ContactForm from './ContactForm';
import Footer from '../Home/Footer';
import './ContactUs.css';
export default function ContactUs() {
	return (
		<div className="ContactUS">
			<Navbar />
			<ContactForm />
			<Footer />
		</div>
	);
}
