import React from 'react';

export default function SearchBar() {
	return (
		<div className="searchbar">
			<input
				type="text"
				placeholder="Search for products..."
				className="search-input"
			/>
			<button className="search-button"> Search </button>
		</div>
	);
}
