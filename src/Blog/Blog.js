import React from 'react';
import Navbar from '../Home/Navbar';
import './Blog.css';
import Posts from './Posts';
import Footer from '../Home/Footer';

export default function Blog() {
	return (
		<div className="blog">
			<Navbar />
			<h3 className="blog-title">Latest Blog Posts</h3>
			<Posts />
			<Footer />
		</div>
	);
}
