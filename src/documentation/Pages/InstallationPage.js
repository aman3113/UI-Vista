import React from "react";
import CodeSnippet from "../assets/CodeSnippet";
import { Avatar } from "../../components";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

const InstallationPage = () => {
	const code1 = `
	npm i vista-ui
	`;
	const code2 = `
	import {componentName} from "vista-ui"
	`;
	const code3 = `
	<Avatar src={user1} size="small" />
	<Avatar src={user2} size="medium" type="primary" />
	<Avatar src={user3} size="large" type="secondary" />
	`;

	return (
		<div className="flex flex-col gap-3">
			<h1 className="text-3xl font-bold py-5">Installation</h1>
			<p>
				To use the MyComponentLibrary in your React project, follow these steps:
			</p>

			<div>
				<h2 className="text-xl font-semibold">Step 1: Install the Library</h2>
				<p>
					You can install the MyComponentLibrary package using npm or yarn. Run
					one of the following commands based on your preferred package manager:
				</p>

				<CodeSnippet code={code1} />
			</div>

			<div>
				<h2 className="text-xl font-semibold">Step 2: Import Components</h2>
				<p>
					Import the components you want to use in your React application. You
					can import them like this:
				</p>

				<CodeSnippet code={code2} />
			</div>

			<div>
				<h2 className="text-xl font-semibold">Step 3: Use Components</h2>
				<p>
					You can now use the imported components within your React components.
					For example:
				</p>

				<CodeSnippet code={code3} />
				<div className="flex gap-2 p-2">
					<Avatar src={user1} size="small" />
					<Avatar src={user2} size="medium" type="primary" />
					<Avatar src={user3} size="large" type="secondary" />
				</div>
			</div>

			<p className="dark:text-green-400 pb-4 text-xl">
				That's it! You have successfully installed and used the
				MyComponentLibrary in your project.
			</p>
		</div>
	);
};

export default InstallationPage;
