import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Products from './Products/Products';
import AboutUsPage from './AboutUs/AboutUsPage';
import ContactUs from './ContactUs/ContactUs';
import Blog from './Blog/Blog';

export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</div>
	);
}
