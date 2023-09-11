import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Import your chosen style
import { BsClipboard2Fill } from "react-icons/bs";

const CodeSnippet = ({ code }) => {
	const [isCopied, setIsCopied] = useState(false);
	function handleCopy() {
		navigator.clipboard.writeText(code);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 3000);
	}
	return (
		<div className="border border-black rounded-md overflow-hidden relative my-3">
			<button
				className="rounded-md  px-3 py-1 bg-green-400 text-white hover:bg-green-600 flex gap-2 items-center absolute top-2 right-2"
				onClick={handleCopy}
			>
				<BsClipboard2Fill />
				{isCopied ? "COPIED!" : "COPY"}
			</button>
			<SyntaxHighlighter language="jsx" style={docco}>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeSnippet;
