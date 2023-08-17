import BlogItem from "./BlogItem";

const data = {
	title: "Designing for color blind people",
	date: "24 july 2203",
	tags: ["guide", "design"],
	by: {
		name: "Lorem ipsum",
		job: "CTOF",
		img: "https://a.storyblok.com/f/198185/1472x1472/dfde248395/ricardo-1.png/m/100x100/",
	},
};

const Blog = () => {
	return (
		<section className="blog">
			<hgroup className="blog__titles">
				<h1>Blog.</h1>
				<h2>Our very own meggazine.</h2>
			</hgroup>

			<div className="blog__items">
				<BlogItem data={data} />
				<BlogItem data={data} />
				<BlogItem data={data} />
			</div>
		</section>
	);
};

export default Blog;
