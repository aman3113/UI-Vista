// LinkButton.js
import React from "react";
import "./LinkButton.css";

function LinkButton({ text, href, variant, size }) {
	const buttonClass = `link-button ${variant} ${size}`;

	return (
		<a href={href} className={buttonClass}>
			{text}
		</a>
	);
}

export default LinkButton;
