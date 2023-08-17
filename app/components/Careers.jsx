import Button from "./Button";

const careers = [
	"Product manager",
	"tech sales prffesional",
	"senior front-end developer",
];

const Careers = () => {
	return (
		<section className="careers">
			<div>
				<h1 className="careers__title">Careers</h1>
				<div>
					{careers.map((title) => (
						<div key={title} className="career">
							<h3>{title}</h3>
							<Button></Button>
						</div>
					))}
				</div>

				<Button>See all positions</Button>
			</div>

			<div className="handbook-cta">
				<h1 className="handbook-cta__title">
					Making it happen, with(out) chaos.
				</h1>
				<p className="handbook-cta__text">
					We know time is scarce and life is hectic, so the bottom line is  we
					think, design, develop, and launch digital products. Still, if you&apos;re
					not pressed for time and are looking for an interesting read while you
					savour your morning coffee, here&apos;s our Handbook.
				</p>
				<Button>Read Handbook</Button>
			</div>
		</section>
	);
};

export default Careers;
