import Project from "./Project";

const work = {
	name: "dia",
	desc: "An app to empower women in thier fertility journey",
	awards: [
		{
			img: "https://a.storyblok.com/f/198185/168x132/b551ca90d3/reddot.jpg/m/120x0/",
			title: "red dot 2022",
		},
		{
			img: "https://a.storyblok.com/f/198185/112x88/c5732814c2/european-design-nominee-gold.png/m/120x0/",
			title: "red dot 2022",
		},
	],
	images: [
		"https://a.storyblok.com/f/198185/3840x3840/18f579a475/diathumb.jpeg/m/1440x1080/",
		"https://a.storyblok.com/f/198185/1600x1200/80012553aa/dia-thumb-03.jpg/m/1440x1080/",
	],
};

const SelectedWorks = () => {
	return (
		<section className="selected-works">
			<h1 className="selected-works__title">selected work</h1>

			<div className="selected-works__container">
				<Project key={1} data={work} />
				<Project key={300} data={work} />
				<Project key={200} data={work} />
			</div>
		</section>
	);
};

export default SelectedWorks;
