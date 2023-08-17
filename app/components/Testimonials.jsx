import Image from "next/image";
import Testimonial from "./Testimonial";

const testimonials = [
	{
		name: "Lorem ipsum",
		img: "https://a.storyblok.com/f/198185/800x800/732d42fd39/rafaelsardinha.jpeg/m/100x100/",
		comment:
			"“Working with Significa was an amazing experience. We have built an amazing brand together and look forward to working on more exciting projects with you all.”",
	},
];

const Testimonials = () => {
	return (
		<section className="testimonials">
			<hgroup className="testimonials__titles">
				<h1>Testimonials</h1>
				<h2>Our wall of love</h2>
			</hgroup>
			<div className="testimonials__svgs">
				<Image alt="" src="/t-svg2.svg" width={200} height={200} />
				<Image alt="" src="/t-svg1.svg" width={200} height={200} />
			</div>
			<div className="testimonials__container">
				<Testimonial data={testimonials[0]} />
				<Testimonial data={testimonials[0]} />
				<Testimonial data={testimonials[0]} />
			</div>
		</section>
	);
};

export default Testimonials;
