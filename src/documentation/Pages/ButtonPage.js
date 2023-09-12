import React from "react";
import {
	FloatingActionButton,
	LinkButton,
	PrimaryButton,
	IconButton,
} from "../../components";
import CodeSnippet from "../assets/CodeSnippet";

function ButtonPage() {
	const code1 = `
	<FloatingActionButton
		icon="📷"
		onClick={() => alert("Button clicked")}
		variant="solid"
		size="medium"
	/>
	<FloatingActionButton
		icon="📷"
		onClick={() => alert("Button clicked")}
		variant="outline"
		size="medium"
	/>
	<FloatingActionButton
		icon="📷"
		onClick={() => alert("Button clicked")}
		variant="ghost"
		size="medium"
	/>
	`;

	const code2 = `
	<IconButton
		icon="🕑"
		text="Send Message"
		onClick={() => alert("Button clicked")}
		variant="solid"
		size="medium"
	/>
	<IconButton
		icon="🕑"
		text="Send Message"
		onClick={() => alert("Button clicked")}
		variant="outline"
		size="medium"
	/>
	<IconButton
		icon="🕑"
		text="Send Message"
		onClick={() => alert("Button clicked")}
		variant="ghost"
		size="medium"
	/>
	`;

	const code3 = `
	<LinkButton
		label="Visit Website"
		href="https://example.com"
		variant="ghost"
		size="large"
	/>
	<LinkButton
		label="Visit Website"
		href="https://example.com"
		variant="solid"
		size="large"
	/>
	<LinkButton
		label="Visit Website"
		href="https://example.com"
		variant="outline"
		size="large"
	/>
	`;

	const code4 = `
	<PrimaryButton
		label="Submit Form"
		onClick={() => alert("Button clicked")}
		variant="ghost"
		size="medium"
	/>
	<PrimaryButton
		label="Submit Form"
		onClick={() => alert("Button clicked")}
		variant="outline"
		size="medium"
	/>
	<PrimaryButton
		label="Submit Form"
		onClick={() => alert("Button clicked")}
		variant="solid"
		size="medium"
	/>
	`;
	return (
		<div>
			<h2 className="text-3xl font-bold py-5">Buttons</h2>

			<div className="mb-3">
				<h3 className="text-xl font-semibold py-2">Floating Action Button</h3>
				<p>A floating action button with an icon.</p>
				<div className="flex gap-2 py-3">
					<FloatingActionButton
						icon="📷"
						onClick={() => alert("Button clicked")}
						variant="solid"
						size="medium"
					/>
					<FloatingActionButton
						icon="📷"
						onClick={() => alert("Button clicked")}
						variant="outline"
						size="medium"
					/>
					<FloatingActionButton
						icon="📷"
						onClick={() => alert("Button clicked")}
						variant="ghost"
						size="medium"
					/>
				</div>
				<CodeSnippet code={code1} />
			</div>

			<div className="mb-3">
				<h3 className="text-xl font-semibold py-2">Icon Button</h3>
				<p>An icon button with optional text.</p>
				<div className="flex gap-2 py-3 items-start">
					<IconButton
						icon="🕑"
						text="Send Message"
						onClick={() => alert("Button clicked")}
						variant="solid"
						size="medium"
					/>
					<IconButton
						icon="🕑"
						text="Send Message"
						onClick={() => alert("Button clicked")}
						variant="outline"
						size="medium"
					/>
					<IconButton
						icon="🕑"
						text="Send Message"
						onClick={() => alert("Button clicked")}
						variant="ghost"
						size="medium"
					/>
				</div>
				<CodeSnippet code={code2} />
			</div>

			<div className="mb-3">
				<h3 className="text-xl font-semibold py-2">Link Button</h3>
				<p>A link button that navigates to a URL.</p>
				<div className="flex gap-2 py-3">
					<LinkButton
						text="Visit Website"
						href="https://example.com"
						variant="ghost"
						size="large"
					/>
					<LinkButton
						text="Visit Website"
						href="https://example.com"
						variant="solid"
						size="large"
					/>
					<LinkButton
						text="Visit Website"
						href="https://example.com"
						variant="outline"
						size="large"
					/>
				</div>
				<CodeSnippet code={code3} />
			</div>

			<div className="mb-3">
				<h3 className="text-xl font-semibold py-2">Primary Button</h3>
				<p>A primary button for common actions.</p>
				<div className="flex gap-2 py-3">
					<PrimaryButton
						text="Submit Form"
						onClick={() => alert("Button clicked")}
						variant="ghost"
						size="medium"
					/>
					<PrimaryButton
						text="Submit Form"
						onClick={() => alert("Button clicked")}
						variant="outline"
						size="medium"
					/>
					<PrimaryButton
						text="Submit Form"
						onClick={() => alert("Button clicked")}
						variant="solid"
						size="medium"
					/>
				</div>
				<CodeSnippet code={code4} />
			</div>

			<div className="mb-3">
				<h3 className="text-xl font-semibold py-2">Size</h3>
				<p>A primary button for common actions.</p>
				<div className="flex gap-2 py-3 items-center">
					<FloatingActionButton
						text="Submit Form"
						icon="📷"
						onClick={() => alert("Button clicked")}
						variant="solid"
						size="md"
					/>
					<PrimaryButton
						text="Submit Form"
						onClick={() => alert("Button clicked")}
						variant="ghost"
						size="xs"
					/>
					<LinkButton
						text="Submit Form"
						onClick={() => alert("Button clicked")}
						variant="outline"
						size="sm"
					/>
					<IconButton
						icon="🕑"
						text="Submit Form"
						onClick={() => alert("Button clicked")}
						variant="solid"
						size="lg"
					/>
				</div>
				<CodeSnippet code={code4} />
			</div>
		</div>
	);
}

export default ButtonPage;
