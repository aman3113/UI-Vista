import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Docs = () => {
	return (
		<div className="flex h-[90vh]">
			<div className="hidden md:block">
				<SideBar />
			</div>
			<div className="p-2 overflow-y-auto w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default Docs;
