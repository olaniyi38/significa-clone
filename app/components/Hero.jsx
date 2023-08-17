"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Video from "./Video";

const imgs = [
	"https://a.storyblok.com/f/198185/3841x1920/0f079cf300/how-to-manage-information-cover.png/m/200x160/",
	"https://a.storyblok.com/f/198185/3840x3840/18f579a475/diathumb.jpeg/m/200x160/",
	"https://a.storyblok.com/f/198185/2016x1512/c83505ff60/allo-thumbnail-01.png/m/200x160/",
	"https://a.storyblok.com/f/198185/3840x1920/ad87ae7a77/the-three-shephards-looking-up-to-our-lady-of-fatima.jpg/m/200x160/",
];

const titles = ["Think", "design", "develop", "launch", "repeat"];

const Hero = () => {
	const [coordinates, setCoordinates] = useState({
		left: 0,
		top: 0,
	});

	function onVideoHover(e) {
		const rect = e.target.getBoundingClientRect();
		setCoordinates({
			top: e.clientY - rect.top,
			left: e.clientX - rect.left,
		});
	}

	const contRef = useRef();
	const tlRef = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			tlRef.current = gsap
				.timeline({
					defaults: { opacity: 0, duration: 0.3, ease: "back.out(1.6)" },
				})
				.from(".hero__titles span", {
					y: -10,
					stagger: 0.4,
				})
				.from(".hero__articles", {
					y: 30,
				})
				.from(
					".hero__video",
					{
						y: 30,
					},
					"-=0.3"
				);
		}, contRef);

		return () => ctx.revert();
	}, []);

	return (
		<section ref={contRef} className="hero">
			<motion.hgroup className="hero__titles">
				{titles.map((title) => (
					<span key={title}>{title}.</span>
				))}
			</motion.hgroup>

			<div className="hero__articles">
				{imgs.map((url) => {
					return (
						<div key={url} className="hero__article">
							<div className="hero__article-img">
								<Image width={100} height={100} src={url} alt="" />
							</div>
							<div className="hero__article-about">
								<h1>How to manage information as a project manager</h1>
								<small>from our blog</small>
							</div>
						</div>
					);
				})}
			</div>

			<div className="hero__video" onMouseMove={onVideoHover}>
				<Video
					src="https://a.storyblok.com/f/198185/x/593e8ba17f/significareel_comp.mp4"
					poster={
						"https://a.storyblok.com/f/198185/5760x3240/3f51de3acf/cover-showreel.jpeg/m/0x0/"
					}
				/>
			</div>
		</section>
	);
};

export default Hero;
