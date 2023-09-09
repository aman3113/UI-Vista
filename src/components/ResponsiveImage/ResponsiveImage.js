import React from "react";
import "./ResponsiveImage.css";

function ResponsiveImage({
	boxSize,
	src,
	fallbackSrc,
	alt,
	objectFit,
	borderRadius,
}) {
	const imageStyles = {
		width: boxSize || "100%",
		height: boxSize || "auto",
		objectFit: objectFit || "cover",
		borderRadius: borderRadius === "full" ? "50%" : borderRadius || "0",
	};

	return (
		<img
			className="responsive-image"
			src={src || fallbackSrc}
			alt={alt}
			style={imageStyles}
		/>
	);
}

export default ResponsiveImage;
