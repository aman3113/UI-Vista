// AvatarBadge.js
import React from "react";
import "./AvatarBadge.css";

function AvatarBadge({ boxSize, bg, children }) {
	const badgeStyles = {
		width: boxSize,
		height: boxSize,
		backgroundColor: bg,
	};

	return (
		<div className="avatar-badge" style={badgeStyles}>
			{children}
		</div>
	);
}

export default AvatarBadge;
