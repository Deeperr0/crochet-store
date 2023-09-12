import React from 'react';
import ReviewCard from './ReviewCard';
import testimonials from './testimonials';
export default function Reviews(props) {
	const reviews = testimonials.map((review) => (
		<ReviewCard text={review.text} user={review.name} key={review.id} />
	));
	return (
		<div className="reviews">
			<h3 className="reviews-title">What Our Customers Say</h3>
			<div className="reviews-list">{reviews}</div>
		</div>
	);
}
