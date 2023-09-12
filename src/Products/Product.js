import React from 'react';
import AddToCart from './AddToCart';

export default function Product(props) {
	return (
		<div className="product">
			<div className="product-list-image">
				<img src={props.img} alt={props.name} />
			</div>
			<div className="product-details">
				<h2 className="product-name">{props.name}</h2>
				<p className="product-price">${props.price}</p>
				<p className="product-description">{props.description}</p>
				<p className="product-status">
					{props.quantity
						? `${props.quantity} items available!`
						: 'Out of stock!'}
				</p>
				<AddToCart
					className={
						props.quantity ? 'add-to-cart-active' : 'add-to-cart-inactive'
					}
				/>
			</div>
		</div>
	);
}
