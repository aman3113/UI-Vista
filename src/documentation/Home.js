import React from "react";
import { Link } from "react-router-dom";
import {
	BsArrowRightShort,
	BsGithub,
	BsLinkedin,
	BsTwitter,
} from "react-icons/bs";

const Home = () => {
	return (
		<div className="w-full  gap-6 -z-10">
			<div className=" flex flex-col justify-center items-center px-5 w-full min-h-[90vh] gap-6">
				<h1 className="text-3xl md:text-5xl font-extrabold text-center w-[70%]">
					Now Create Good UI React Apps with{" "}
					<span className="text-[#3BCC8C]">minimum Efforts</span> .
				</h1>
				<p className="md:text-xl font-semibold text-center">
					Vista Ui gives you the power to access beautiful and modular react
					components with a single command line.
				</p>
				<div className="flex gap-3 items-center flex-wrap">
					<Link
						to="/install"
						className="px-4 py-2 bg-[#3BCC8C] text-white rounded-md flex gap-2 items-center"
					>
						<span>Get Started</span>
						<BsArrowRightShort />
					</Link>
					<a
						href="https://github.com/aman3113"
						className="px-4 py-2 bg-gray-300 dark:bg-gray-400  rounded-md flex gap-2 items-center"
					>
						<span>Github</span> <BsGithub />
					</a>
				</div>
			</div>
			<footer className=" bg-[#212222] p-4  flex flex-col gap-3 items-center  w-full sticky bottom-0">
				<div className="text-green-500 flex gap-5 items-center justify-center">
					<a
						href="www.linkedin.com/in/antilaman3113"
						className="hover:text-yellow-500 hover:scale-110"
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin size={25} />
					</a>
					<a
						href="https://twitter.com/AntilAman3113"
						className="hover:text-yellow-500 hover:scale-110"
						target="_blank"
						rel="noreferrer"
					>
						<BsTwitter size={25} />
					</a>
					<a
						href="https://github.com/aman3113"
						className="hover:text-yellow-500 hover:scale-110"
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub size={25} />
					</a>
				</div>
				<p className="text-white">No Copyright @2023</p>
			</footer>
		</div>
	);
};

export default Home;
