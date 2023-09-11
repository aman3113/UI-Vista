// Card.js
import React from "react";
import "./Card.css";

function Card({ children, text, width, height }) {
	const style = {
		width: width,
		height: height,
	};
	return (
		<div className="card dark:bg-gray-600" style={style}>
			{children}
			{text}
		</div>
	);
}

export default Card;
