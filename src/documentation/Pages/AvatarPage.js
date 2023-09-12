import React from "react";
import { Avatar } from "../../components";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import CodeSnippet from "../assets/CodeSnippet";

const AvatarPage = () => {
	const code1 = `
	<Avatar name="Aman" size="medium" />
	<Avatar src={user1} size="medium" />
	<Avatar src={user2} size="medium" type="primary" />
	<Avatar src={user3} size="medium" type="secondary" />
	`;

	const code2 = `
	<Avatar src={user1} size="small" />
	<Avatar src={user2} size="medium" type="primary" />
	<Avatar src={user3} size="large" type="secondary" />
	`;
	return (
		<div>
			<h2 className="text-3xl font-bold py-5">Avatar</h2>
			<div className="mb-3">
				<h3 className="text-2xl font-semibold">Usage</h3>
				<div className="flex gap-2 py-2 flex-wrap">
					<Avatar name="Aman" size="medium" />
					<Avatar src={user1} size="medium" />
					<Avatar src={user2} size="medium" type="primary" />
					<Avatar src={user3} size="medium" type="secondary" />
				</div>
				<CodeSnippet code={code1} />
			</div>
			<div className="mb-3">
				<h3 className="text-2xl font-semibold">Size</h3>
				<div className="flex gap-2 py-2">
					<Avatar src={user1} size="small" />
					<Avatar src={user2} size="medium" type="primary" />
					<Avatar src={user3} size="large" type="secondary" />
				</div>
				<CodeSnippet code={code2} />
			</div>
			<div>
				<h3 className="text-2xl font-semibold">Fallback</h3>
				<div className="flex gap-2 py-2">
					<Avatar name="Aman Kumar" size="medium" bg="green" />
					<Avatar name="Ujjwal" size="medium" type="primary" />
					<Avatar name="Bhanu" size="medium" bg="red" type="secondary" />
				</div>
				<CodeSnippet code={code2} />
			</div>
		</div>
	);
};

export default AvatarPage;
