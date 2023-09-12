import './Home.css';
import Navbar from './Navbar';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import AboutUs from './AboutUs';
import Reviews from './Reviews';
import Footer from './Footer';

function Home() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<FeaturedProducts />
			<AboutUs />
			<Reviews />
			<Footer />
		</div>
	);
}

export default Home;
