// Avatar.js
import React from "react";
import "./Avatar.css";

function Avatar({ name, size, type, src, children, bg, border }) {
	// Calculate styles based on props
	const avatarStyles = {
		width: size,
		height: size,
		border: border ? `2px solid ${border}` : undefined,
	};

	let content;

	if (src) {
		content = <img src={src} alt={name} />;
	} else {
		// Display the first letter of the name if src is not provided
		const initials = name ? name.charAt(0).toUpperCase() : "";
		content = (
			<div className="avatar-initials" style={{ backgroundColor: bg }}>
				{initials}
			</div>
		);
	}

	return (
		<div className="avatar-container" style={avatarStyles}>
			<div className={`avatar ${size} ${type}`}>{content}</div>
			{children && children}
		</div>
	);
}

export default Avatar;
