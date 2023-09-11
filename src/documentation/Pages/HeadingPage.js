import React from "react";
import { Headings } from "../../components";
import CodeSnippet from "../assets/CodeSnippet";

function HeadingsPage() {
	const code1 = `
	<Headings color="black">Default Heading</Headings>
	`;
	const code2 = `
	<Headings size="sm" color="green">
		Custom Heading (SM Size, Green Color)
	</Headings>
	<Headings size="md" color="red">
		Custom Heading (MD Size, Red Color)
	</Headings>
	<Headings size="xl" color="gray">
		Custom Heading (XL Size, Gray Color)
	</Headings>
	<Headings size="3xl" color="pink">
		Custom Heading (3XL)
	</Headings>
	`;

	const code3 = `
	<Headings size="lg" lines={1}>
		This is a long heading that will be truncated after 1 lines of text.
	</Headings>
	`;
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-3xl font-bold py-5">Headings</h2>

			<div>
				<h3 className="text-xl font-bold py-2">Default Heading</h3>
				<p className="py-3">A basic heading component.</p>
				<Headings color="black">Default Heading</Headings>
				<CodeSnippet code={code1} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Custom Size and Color</h3>
				<p className="py-3">Customize the heading size and color.</p>
				<Headings size="sm" color="green">
					Custom Heading (SM Size, Green Color)
				</Headings>
				<Headings size="md" color="red">
					Custom Heading (MD Size, Red Color)
				</Headings>
				<Headings size="xl" color="gray">
					Custom Heading (XL Size, Gray Color)
				</Headings>
				<Headings size="3xl" color="pink">
					Custom Heading (3XL)
				</Headings>

				<CodeSnippet code={code2} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Truncate Text</h3>
				<p className="py-3">Truncate long headings.</p>
				<Headings size="lg" lines={1}>
					This is a long heading that will be truncated after 1 lines of text.
				</Headings>
				<CodeSnippet code={code3} />
			</div>
		</div>
	);
}

export default HeadingsPage;
