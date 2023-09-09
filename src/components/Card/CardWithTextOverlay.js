// CardWithTextOverlay.js
import React from "react";
import Card from "./Card";
import "./CardWithTextOverlay.css";

function CardWithTextOverlay({ children, overlayText }) {
	return (
		<Card>
			{children}
			<div className="text-overlay">{overlayText}</div>
		</Card>
	);
}

export default CardWithTextOverlay;
