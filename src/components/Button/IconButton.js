// IconButton.js
import React from "react";
import "./IconButton.css";

function IconButton({ icon, text, onClick, variant, size }) {
	const buttonClass = `icon-button ${variant} ${size}`;

	return (
		<button className={buttonClass} onClick={onClick}>
			{icon} {text}
		</button>
	);
}

export default IconButton;
