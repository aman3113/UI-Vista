// LinkButton.js
import React from "react";
import "./LinkButton.css";

function LinkButton({ label, href, variant, size }) {
	const buttonClass = `link-button ${variant} ${size}`;

	return (
		<a href={href} className={buttonClass}>
			{label}
		</a>
	);
}

export default LinkButton;
