import React from 'react';
import PostCard from './PostCard';
import postData from './postData';

export default function Posts() {
	const posts = postData.map((post) => (
		<PostCard
			img={post.img}
			title={post.title}
			text={post.text}
			date={post.date}
		/>
	));
	return (
			<div className="posts-list">{posts}</div>
	);
}
