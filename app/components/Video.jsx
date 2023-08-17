"use client";

import React, { useRef, useState } from "react";

import { FaPlay, FaPlayCircle } from "react-icons/fa";

const Video = ({ src, poster }) => {
	const [coordinates, setCoordinates] = useState({
		left: 0,
		top: 0,
	});
	const videoRef = useRef();

	function onVideoHover(e) {
		const rect = e.target.getBoundingClientRect();
		setCoordinates({
			top: e.clientY - rect.top,
			left: e.clientX - rect.left,
		});
	}

	return (
		<div className="video">
			<video
				onMouseMove={onVideoHover}
				ref={videoRef}
				autoPlay={false}
				loop
				poster={poster}
			>
				<source src={src} type="video/mp4" />
			</video>
			<div
				style={{
					top: coordinates.top + "px",
					left: coordinates.left + -50 + "px",
				}}
				className="video__play"
				onClick={(e) => {
					videoRef.current.play();
					e.target.style.visibility = "hidden";
				}}
			>
				<FaPlayCircle />
				<span>Play Showreel</span>
			</div>
		</div>
	);
};

export default Video;
