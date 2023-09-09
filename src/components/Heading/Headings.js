import React from "react";
import "./Headings.css";

function Headings({ size, color, lines, children }) {
	const headingStyles = {
		fontSize: size ? `var(--heading-${size})` : undefined,
		color: color || undefined,
		WebkitLineClamp: lines || undefined,
	};

	return (
		<div className="heading" style={headingStyles}>
			{children}
		</div>
	);
}

export default Headings;
