import Blog from "./components/Blog";
import Button, { BUTTON_TYPES } from "./components/Button";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Playbook from "./components/Playbook";
import SelectedWorks from "./components/SelectedWorks";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

const HomePage = () => {
	return (
		<main className="home">
			<Hero />
			<SelectedWorks />
			<Services />
			<Testimonials />
			<section className="about">
				<hgroup className="about__titles">
					<h1>About ourselves</h1>
					<h2>Perfeggcionism freaks.</h2>
				</hgroup>
				<p className="about__text">
					We don&apos;t take ourselves too seriously, but we&apos;re definitely serious
					about what we do. Yes, we love our egg puns and go all in, in our
					random, quirky creativity. All that while striving to deliver
					excellence in everything we do.
				</p>
				<Button>Go to about us</Button>
			</section>
			<Playbook />
			<Blog />
			<Careers />
		</main>
	);
};

export default HomePage;
