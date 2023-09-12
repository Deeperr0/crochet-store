import React from 'react';
import ProductCard from './ProductCard';
import products from './products';

export default function FeaturedProducts(props) {
	const productData = products.map((product) => (
		<ProductCard
			img={product.img}
			name={product.name}
			price={product.price}
			key={product.id}
		/>
	));
	return (
		<div className="featured-products">
			<h2 className="featured-products-title">Featured Products</h2>
			<div className="featured-products-list">{productData}</div>
		</div>
	);
}
