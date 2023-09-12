import React from 'react';
import Navbar from '../Home/Navbar';
import products from '../Home/products';
import Product from './Product';
import './Products.css';
import Footer from '../Home/Footer';

function Products() {
	const productsData = products.map((product) => (
		<Product
			img={product.img}
			name={product.name}
			description={product.description}
			key={product.id}
			price={product.price}
			quantity={product.quantity}
		/>
	));
	return (
		<div className="Products">
			<Navbar />
			{productsData}
			<Footer />
		</div>
	);
}

export default Products;
