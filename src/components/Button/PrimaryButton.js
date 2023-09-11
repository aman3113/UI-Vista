// PrimaryButton.js
import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ text, onClick, variant, size }) {
	const buttonClass = `primary-button ${variant} ${size}`;

	return (
		<button className={buttonClass} onClick={onClick}>
			{text}
		</button>
	);
}

export default PrimaryButton;
