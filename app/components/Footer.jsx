import { LiaEggSolid } from "react-icons/lia";

const links = [
	{
		name: "significa",
		links: ["lorem ip", "lorem ip", "lorem ip", "lorem ip"],
	},
	{ name: "handbook", links: ["lorem ip", "lorem ip", "lorem ip", "lorem ip"] },
	{
		name: "follow us",
		links: ["lorem ip", "lorem ip", "lorem ip", "lorem ip"],
	},
];

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__logo">
				<LiaEggSolid />

				<div className="footer__motto">
					<hgroup>
						<span>Think.</span>
						<span>design.</span>
						<span>develop.</span>
						<span>launch.</span>
						<span>repeat.</span>
					</hgroup>
				</div>
			</div>

			<div className="footer__links">
				{links.map(({ name, links }) => {
					return (
						<div key={name} className="footer__link-group">
							<h3>{name}</h3>
							<ul>
								{links.map((title, i) => {
									return (
										<li
											key={title}
											className={
												i === 0 && name === "significa" ? "active" : ""
											}
										>
											{title}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
