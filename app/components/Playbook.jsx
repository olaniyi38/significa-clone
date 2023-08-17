import Button from "./Button";

const Playbook = () => {
	return (
		<section className="playbook">
			<div className="mission">
				<h1 className="title">Mission and values.</h1>
				<p className="text">
					It&apos;s not just what we do. It&apos;s the why and the how we go about doing
					things. That&apos;s what matters.
				</p>
				<Button>Go to Playbook</Button>
			</div>
			<div className="perks">
				<h1 className="title">Perks and benefits.</h1>
				<p className="text">
					We love nice things. This is the good stuff. And it&apos;s getting bigger
					and bigger.
				</p>
				<Button>Go to Playbook</Button>
			</div>
			<div className="career-plan">
				<h1 className="title">Career plan</h1>
				<p className="text">
					Your goals, your career. We&apos;re here to help you grow. Together.
				</p>
				<Button>Go to Playbook</Button>
			</div>
		</section>
	);
};

export default Playbook;
