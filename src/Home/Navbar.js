import React from 'react';
import SearchBar from './SearchBar';

export default function Navbar() {
	return (
		<div className="navbar">
			<a href="/">
				<h1 className="title">CrochetQ8</h1>
			</a>
			<ul className="links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/products">Products</a>
				</li>
				<li>
					<a href="/about-us">About Us</a>
				</li>
				<li>
					<a href="/contact-us">Contact Us</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
			</ul>
			<SearchBar />
		</div>
	);
}
