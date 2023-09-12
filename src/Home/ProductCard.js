import React from 'react';

export default function ProductCard(props) {
	return (
		<div className="product-card">
			<img src={props.img} className="product-image" alt={props.name} />
			<h3 className="product-name">{props.name}</h3>
			{props.price && <p className="product-price">${props.price}</p>}
		</div>
	);
}
