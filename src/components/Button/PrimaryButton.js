// PrimaryButton.js
import React from "react";
import "./PrimaryButton.css";

function PrimaryButton({ label, onClick, variant, size }) {
	const buttonClass = `primary-button ${variant} ${size}`;

	return (
		<button className={buttonClass} onClick={onClick}>
			{label}
		</button>
	);
}

export default PrimaryButton;
