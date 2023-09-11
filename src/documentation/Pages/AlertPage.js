import React from "react";
import { Alert } from "../../components";
import CodeSnippet from "../assets/CodeSnippet";

const AlertPage = () => {
	const code = `
	<Alert status="error" description="An error occurred." />

	<Alert status="success" description="Operation was successful." />

	<Alert status="warning" description="Warning: This is important." />

	<Alert status="info" description="Information message." />
	`;
	return (
		<div>
			<h2 className="text-3xl font-bold py-5">Alerts</h2>

			<div className="sm:flex gap-3 pb-3">
				<div className="flex-1">
					<h3 className="text-xl font-semibold">Error Alert</h3>
					<Alert status="error" description="An error occurred." />
				</div>

				<div className="flex-1">
					<h3 className="text-xl font-semibold">Success Alert</h3>
					<Alert status="success" description="Operation was successful." />
				</div>
			</div>

			<div className="sm:flex gap-3 pb-3">
				<div className="flex-1">
					<h3 className="text-xl font-semibold">Warning Alert</h3>
					<Alert status="warning" description="Warning: This is important." />
				</div>
				<div className="flex-1">
					<h3 className="text-xl font-semibold">Info Alert</h3>
					<Alert status="info" description="Information message." />
				</div>
			</div>

			<CodeSnippet code={code} />
		</div>
	);
};

export default AlertPage;
