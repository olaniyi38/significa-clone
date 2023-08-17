"use client";

import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ data }) => {
	const { name, desc, images, awards } = data;


	return (
		<div className="project">
			<motion.div
				initial={{ y: "-2rem", opacity: 0 }}
				animate={{ y: "0rem", opacity: 1 }}
				transition={{ delay: 0.3 }}
				className="project__info"
			>
				<hgroup>
					<h1 className="project__name">{name}.</h1>
					<p className="project__about">{desc}</p>
				</hgroup>

				<div className="project__awards">
					{awards.map((award) => {
						return (
							<div key={award.title} className="project__award">
								<Image alt="" width={50} height={50} src={award.img} />
								<div>
									<small>Award</small>
									<h3>{award.title}</h3>
								</div>
							</div>
						);
					})}
				</div>

				<Link className="to-project" href={`/projects/${name.toLowerCase()}`}>
					<Button>View project</Button>
				</Link>
			</motion.div>
			<motion.div
				initial={{ y: "-2rem", opacity: 0 }}
				animate={{ y: "0rem", opacity: 1 }}
				transition={{ delay: 0.3 }}
				className="project__carousel"
			>
				<button className="next">
					<FaArrowRight />
				</button>
				<button className="prev">
					<FaArrowLeft />
				</button>
				<Swiper
					navigation={{
						prevEl: ".prev",
						nextEl: ".next",
					}}
					modules={[Navigation]}
				>
					{images.map((url) => {
						return (
							<SwiperSlide style={{ position: "relative" }} key={url}>
								<Image src={url} alt="usa" fill={true} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</motion.div>
		</div>
	);
};

export default Project;
