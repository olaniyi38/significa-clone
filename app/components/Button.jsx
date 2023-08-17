import { BsArrowRight } from "react-icons/bs";

export const BUTTON_TYPES = {
	inverted: "inverted",
};

const Button = ({ children, variant, ...otherProps }) => {
	return (
		<button className={`button ${variant ? "button--" + variant : ""}`} {...otherProps}>
			<span>{children}</span>
			<BsArrowRight className="arrow-right" />
		</button>
	);
};

export default Button;
