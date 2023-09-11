// CardWithBadge.js
import React from "react";
import Card from "./Card";
import "./CardWithBadge.css";

function CardWithBadge({ children, badge, width, height }) {
	return (
		<Card width={width} height={height}>
			{children}
			<div className="badge">{badge}</div>
		</Card>
	);
}

export default CardWithBadge;
