import React from "react";
import Button, { BUTTON_TYPES } from "./Button";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Services = () => {
	return (
		<section className="services">
			<div className="services__info">
				<hgroup className="services__titles">
					<h1>Our services</h1>
					<h3>Design-led digital products</h3>
				</hgroup>

				<p className="services__text">
					There is no room for shortcuts when building a great digital
					experience. Everything starts with thorough research and iterative
					experimentation. No stone is left unturned to make data-minded
					decisions. Then we build from scratch, designing and developing,
					tailored to what users need.
				</p>

				<Button>
					Go to services
				</Button>
			</div>
			<div className="services__img">
				<Image
					src={
						"https://significa.co/_app/immutable/assets/pendulum-static-dark.9387b9fd.webp"
					}
					width={400}
					height={400}
					alt="sdd"
				/>
			</div>
		</section>
	);
};

export default Services;
