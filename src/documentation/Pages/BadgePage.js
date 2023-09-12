import React from "react";
import { Avatar, AvatarBadge, Badge } from "../../components";
import CodeSnippet from "../assets/CodeSnippet";

function BadgePage() {
	const code1 = `
	<Badge>Default</Badge>
	`;
	const code2 = `
	<Badge variant="outline">Outline</Badge>
	<Badge variant="solid">Solid</Badge>
	<Badge variant="subtle">Subtle</Badge>
	<Badge variant="success">Success</Badge>
	<Badge variant="remove">Remove</Badge>
	<Badge variant="new">New</Badge>
	`;
	const code3 = `
	<Badge color="green">Success</Badge>
	<Badge color="red" bgColor="pink">
		Label
	</Badge>
	<Badge color="white" bgColor="blue">
		Add
	</Badge>
	`;
	const code4 = `
	<Avatar name="Aman" bg="gray" size="medium" border="red">
		<AvatarBadge boxSize="1rem" bg="green" />
	</Avatar>
	`;

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-3xl font-bold py-5">Badges</h2>

			<div>
				<h3 className="text-xl font-semibold">Default Badge</h3>
				<p className="py-3">A basic badge component.</p>
				<Badge>Default</Badge>
				<CodeSnippet code={code1} />
			</div>

			<div>
				<h3 className="text-xl font-semibold">Custom Badge</h3>
				<p className="py-3">Customize badge with the outline variant.</p>
				<div className="flex gap-3 flex-wrap">
					<Badge variant="outline">Outline</Badge>
					<Badge variant="solid">Solid</Badge>
					<Badge variant="subtle">Subtle</Badge>
					<Badge variant="success">Success</Badge>
					<Badge variant="remove">Remove</Badge>
					<Badge variant="new">New</Badge>
				</div>
				<CodeSnippet code={code2} />
			</div>

			<div>
				<h3 className="text-xl font-semibold"> Colored Badge</h3>
				<p className="py-3">Change the badge color scheme.</p>
				<div className="flex gap-3 flex-wrap">
					<Badge color="green" bgColor="orange">
						Success
					</Badge>
					<Badge color="red" bgColor="pink">
						Label
					</Badge>
					<Badge color="white" bgColor="blue">
						Add
					</Badge>
				</div>
				<CodeSnippet code={code3} />
			</div>

			<div>
				<h3 className="text-xl font-semibold">Avatar Badge</h3>
				<p className="py-3">A badge specifically designed for avatars.</p>
				<Avatar name="Aman" bg="gray" size="medium" border="red">
					<AvatarBadge boxSize="1rem" bg="green" />
				</Avatar>

				<CodeSnippet code={code4} />
			</div>
		</div>
	);
}

export default BadgePage;
