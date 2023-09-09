// Card.js
import React from "react";
import "./Card.css";

function Card({ children, text }) {
	return (
		<div className="card">
			{children}
			{text}
		</div>
	);
}

export default Card;
