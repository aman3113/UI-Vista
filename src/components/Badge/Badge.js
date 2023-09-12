import React from "react";
import "./Badge.css";

function Badge({ variant, bgColor, color, children }) {
	const badgeClasses = `badge ${variant}`;
	const badgeStyles = {
		backgroundColor: bgColor || undefined,
		color: color || undefined,
	};

	return (
		<span className={badgeClasses} style={badgeStyles}>
			{children}
		</span>
	);
}

export default Badge;
