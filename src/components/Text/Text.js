import React from "react";
import "./Text.css";

function Text({ size, color, lines, as, children }) {
	const textStyles = {
		fontSize: size ? `var(--text-${size})` : undefined,
		color: color || undefined,
		fontWeight: as === "bold" ? "bold" : undefined,
		fontStyle: as === "italic" ? "italic" : undefined,
		textDecoration: as === "underline" ? "underline" : undefined,
		background: as === "highlight" ? "#3BCC8C" : undefined,
		WebkitLineClamp: lines || undefined,
		display: lines ? "-webkit-box" : undefined,
		WebkitBoxOrient: lines ? "vertical" : undefined,
		overflow: lines ? "hidden" : undefined,
	};

	return (
		<p className="text" style={textStyles}>
			{children}
		</p>
	);
}

export default Text;
