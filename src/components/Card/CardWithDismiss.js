// CardWithDismiss.js
import React from "react";
import Card from "./Card";
import "./CardWithDismiss.css";

function CardWithDismiss({ children, onDismiss }) {
	return (
		<Card>
			{children}
			<button className="dismiss-button" onClick={onDismiss}>
				Dismiss
			</button>
		</Card>
	);
}

export default CardWithDismiss;
