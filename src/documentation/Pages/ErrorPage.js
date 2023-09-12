import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className=" flex flex-col justify-center items-center px-5 w-full h-[90%] gap-6">
			<h1 className="text-4xl font-extrabold text-center w-[70%]">
				No such Route Exists.
			</h1>
			<Link
				to="/"
				className="px-4 py-2 bg-green-500 text-white rounded-md flex gap-2 items-center"
			>
				Back Home
			</Link>
		</div>
	);
};

export default ErrorPage;
