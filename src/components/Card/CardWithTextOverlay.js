// CardWithTextOverlay.js
import React from "react";
import Card from "./Card";
import "./CardWithTextOverlay.css";

function CardWithTextOverlay({ children, overlayText, width, height }) {
	return (
		<Card width={width} height={height}>
			{children}
			<div className="text-overlay">{overlayText}</div>
		</Card>
	);
}

export default CardWithTextOverlay;
