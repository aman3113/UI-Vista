// Avatar.js
import React from "react";
import "./Avatar.css";

function Avatar({ name, size, type, src, children }) {
	// Calculate styles based on props
	const avatarStyles = {
		width: size,
		height: size,
	};

	let content;

	if (src) {
		content = <img src={src} alt={name} />;
	} else {
		// Display the first letter of the name if src is not provided
		const initials = name ? name.charAt(0).toUpperCase() : "";
		content = <div className="avatar-initials">{initials}</div>;
	}

	return (
		<div className="avatar-container">
			<div className={`avatar ${size} ${type}`} style={avatarStyles}>
				{content}
			</div>
			{children && children}
		</div>
	);
}

export default Avatar;
