import React from "react";
import { ResponsiveImage } from "../../components";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import CodeSnippet from "../assets/CodeSnippet";

function ImagePage() {
	const code1 = `
	<ResponsiveImage src={user1} alt="Image Alt Text" boxSize="200px" />
	`;
	const code2 = `
	<ResponsiveImage
		src={user2}
		alt="Image Alt Text 2"
		boxSize="150px"
		objectFit="cover"
		borderRadius="full"
	/>
	<ResponsiveImage
		src={user3}
		alt="Image Alt Text 2"
		boxSize="150px"
		objectFit="cover"
		borderRadius="20px"
	/>
	`;
	const code3 = `
	<ResponsiveImage src="image3.jpg" fallbackSrc="https://picsum.photos/200" alt="Image Alt Text 3"
		boxSize="250px"
	/>
	`;
	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-3xl font-bold py-5">Responsive Images</h2>

			<div>
				<h3 className="text-xl font-bold py-2">Default Image</h3>
				<p className="pb-3">A basic responsive image.</p>
				<ResponsiveImage src={user1} alt="Image Alt Text" boxSize="200px" />
				<CodeSnippet code={code1} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Custom Image</h3>
				<p className="pb-3">Customize image fit and border radius.</p>
				<div className="flex gap-2 flex-wrap">
					<ResponsiveImage
						src={user2}
						alt="Image Alt Text 2"
						boxSize="150px"
						objectFit="cover"
						borderRadius="full"
					/>
					<ResponsiveImage
						src={user3}
						alt="Image Alt Text 2"
						boxSize="150px"
						objectFit="cover"
						borderRadius="20px"
					/>
				</div>
				<CodeSnippet code={code2} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Fallback Image</h3>
				<p className="pb-3">
					Use a fallback image if the main image is unavailable.
				</p>
				<ResponsiveImage
					src="image3.jpg"
					fallbackSrc="https://picsum.photos/200"
					alt="Image Alt Text 3"
					boxSize="250px"
				/>
				<CodeSnippet code={code3} />
			</div>
		</div>
	);
}

export default ImagePage;
