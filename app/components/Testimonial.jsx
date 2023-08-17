import Image from "next/image";

const Testimonial = ({ data }) => {
	const { name, comment, img } = data;
	return (
		<div className="testimonial">
			<p className="testimonial__comment">{comment}</p>
			<div className="testimonial__about">
				<div className="testimonial__img">
					<Image alt="" width={100} height={100} src={img} />
				</div>
				<div className="testimonial__by">
					<h3>{name}</h3>
					<h4>CEO at allO</h4>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
