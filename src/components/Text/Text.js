import React from "react";
import "./Text.css";

function Text({ size, color, lines, as, children }) {
	const textStyles = {
		fontSize: size ? `var(--text-${size})` : undefined,
		color: color || undefined,
		WebkitLineClamp: lines || undefined,
		fontWeight: as === "bold" ? "bold" : undefined,
		fontStyle: as === "italic" ? "italic" : undefined,
		textDecoration: as === "underline" ? "underline" : undefined,
		background: as === "highlight" ? "yellow" : undefined,
	};

	return (
		<p className="text" style={textStyles}>
			{children}
		</p>
	);
}

export default Text;
