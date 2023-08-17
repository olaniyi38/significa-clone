import Image from "next/image";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";

const BlogItem = ({ data }) => {
	const {
		by: { name, job, img },
		title,
		date,
		tags,
	} = data;

	return (
		<a href="#" className="blog-item">
			<div className="blog-item__by">
				<div className="blog-item__img">
					<Image width={50} alt="" height={50} src={img} />
				</div>
				<div className="blog-item__author">
					<h3>{name}</h3>
					<h4>{job}</h4>
				</div>
			</div>
			<div className="blog-item__about">
				<small>{date}</small>
				<h1 className="blog-item__name">{title}</h1>
				<div className="blog-item__tags">
					{tags.map((tag) => (
						<Button key={tag}>{tag}</Button>
					))}
				</div>
			</div>
			<button className="arrow-right">
				<BsArrowRight />
			</button>
		</a>
	);
};

export default BlogItem;
