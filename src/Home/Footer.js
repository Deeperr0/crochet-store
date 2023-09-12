import React from 'react';

export default function Footer() {
	return (
		<footer>
			<div className="footer">
				<div className="contact-us">
					<h3>Contact us</h3>
					<ul>
						<li>Email: info@example.com</li>
						<li>Phone: (123) 456-7890</li>
					</ul>
				</div>
				<div className="follow-us">
					<h3>Follow us</h3>
					<ul>
						<li>
							<a
								href="https:\\www.facebook.com"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https:\\www.instagram.com"
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https:\\www.twitter.com"
								target="_blank"
								rel="noreferrer"
							>
								Twitter
							</a>
						</li>
					</ul>
				</div>
				<div className="quick-links">
					<h3>Quick links</h3>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
						<li>
							<a href="/about-us">About Us</a>
						</li>
						<li>
							<a href="/contact-us">Contact Us</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
					</ul>
				</div>
			</div>
			<span className="copyright">
				<p>© 2023 CrochetQ8. All rights reserved.</p>
			</span>
		</footer>
	);
}
