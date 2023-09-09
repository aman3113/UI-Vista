// Alert.js
import React from "react";
import "./Alert.css";

function Alert({ status, description, heading }) {
	const alertClass = `alert ${status}`;

	// Define default values based on status
	const defaultHeading = {
		error: "Error!",
		success: "Success!",
		warning: "Warning!",
		info: "Info!",
	}[status];

	const defaultDescription = {
		error: "An error occurred.",
		success: "Operation was successful.",
		warning: "Warning: This is important.",
		info: "Information message.",
	}[status];
	const icon = {
		error: "❌", // You can use any suitable icon here
		success: "✅",
		warning: "⚠️",
		info: "⏺️",
	}[status];

	return (
		<div className={alertClass}>
			<div className="alert-icon">{icon}</div>
			<div className="alert-content">
				<div className="alert-heading">{heading || defaultHeading}</div>
				<div className="alert-description">
					{description || defaultDescription}
				</div>
			</div>
		</div>
	);
}

export default Alert;
