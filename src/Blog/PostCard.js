import React from 'react';

export default function PostCard(props) {
	return (
		<div className="post-card">
			<div className="post-image-container">
				<img src={props.img} className="post-image" alt={props.title} />
			</div>
			<div className="post-details">
				<h3 className="post-name">{props.title}</h3>
				<p className="post-price">{props.date}</p>
				<p className="post-text">{props.text}</p>
			</div>
		</div>
	);
}
