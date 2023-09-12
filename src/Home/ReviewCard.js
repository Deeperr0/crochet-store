import React from 'react';

export default function ReviewCard(props) {
	return (
		<div className="review-card">
			{props.text && <p>{props.text}</p>}
			{props.user && <p>— {props.user}</p>}
		</div>
	);
}
