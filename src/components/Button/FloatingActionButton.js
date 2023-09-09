// FloatingActionButton.js
import React from "react";
import "./FloatingActionButton.css";

function FloatingActionButton({ icon, onClick, variant, size }) {
	const buttonClass = `floating-action-button ${variant} ${size}`;

	return (
		<button className={buttonClass} onClick={onClick}>
			{icon}
		</button>
	);
}

export default FloatingActionButton;
