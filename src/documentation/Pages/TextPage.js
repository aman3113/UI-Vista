import React from "react";
import { Text } from "../../components";
import CodeSnippet from "../assets/CodeSnippet";

function TextPage() {
	const code1 = `
	<Text>This is some text.</Text>
	`;

	const code2 = `
<Text size="sm" color="green">
	Custom Heading (SM Size, Green Color)
</Text>
<Text size="md" color="red">
	Custom Heading (MD Size, Red Color)
</Text>
<Text size="xl" color="gray">
	Custom Heading (XL Size, Gray Color)
</Text>
<Text size="3xl" color="pink">
	Custom Heading (3XL)
</Text>
`;

	const code3 = `
<Text size="md" lines={2}>
This is a long text that will be truncated after 2 lines.
</Text>
`;

	const code4 = `
<Text as="bold">This text is bold.</Text>
<Text as="italic">This text is italic.</Text>
<Text as="underline">This text is underlined.</Text>
<Text as="highlight">This text is highlighted.</Text>
`;
	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-3xl font-bold py-5">Text</h2>

			<div>
				<h3 className="text-xl font-bold py-2">Default Text</h3>
				<p className="pb-3">A basic text component.</p>
				<Text>This is some text.</Text>
				<CodeSnippet code={code1} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Custom Text Size and Color</h3>
				<p className="pb-3">Customize text size and color.</p>
				<Text size="sm" color="green">
					Custom Heading (SM Size, Green Color)
				</Text>
				<Text size="md" color="red">
					Custom Heading (MD Size, Red Color)
				</Text>
				<Text size="xl" color="gray">
					Custom Heading (XL Size, Gray Color)
				</Text>
				<Text size="3xl" color="pink">
					Custom Heading (3XL)
				</Text>
				<CodeSnippet code={code2} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Text Truncation</h3>
				<p className="pb-3">Truncate text after a certain number of lines.</p>
				<Text size="md" lines={2}>
					This is a long text that will be truncated after 2 lines. Lorem ipsum,
					dolor sit amet consectetur adipisicing elit. Facere ab natus tempora
					vero cumque, necessitatibus vel delectus provident eum. Labore
					deleniti ex magnam ab possimus id, assumenda neque beatae unde?
				</Text>
				<CodeSnippet code={code3} />
			</div>

			<div>
				<h3 className="text-xl font-bold py-2">Styled Text</h3>
				<p className="pb-3">
					Apply styles like bold, italic, underline, and highlight.
				</p>
				<Text as="bold">This text is bold.</Text>
				<Text as="italic">This text is italic.</Text>
				<Text as="underline">This text is underlined.</Text>
				<Text as="highlight">This text is highlighted.</Text>
				<CodeSnippet code={code4} />
			</div>
		</div>
	);
}

export default TextPage;
