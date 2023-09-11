import React from "react";
import CodeSnippet from "./assets/CodeSnippet";

const Home = () => {
	const code = `const Home = () => {
		const code = const greeting = "Hello, World!";
		console.log(greeting);;
		return (
			<div className="border-2 border-red-500">
				<CodeSnippet code={code} language="javascript" />
			</div>
		);
	};`;
	return (
		<div className="p-2">
			<CodeSnippet code={code} language="javascript" />
		</div>
	);
};

export default Home;
