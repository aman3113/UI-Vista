import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "./assets/images/logo.png";
import smallLogo from "./assets/images/logo-sm.png";
import { Link } from "react-router-dom";
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
} from "@chakra-ui/react";
import SideBar from "./SideBar";
import { components } from "./assets/data";

const Header = ({ theme, setTheme }) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [input, setInput] = useState("");

	const [filteredComponents, setFilteredComponents] = useState([]);

	function handleSearch(e) {
		const text = e.target.value.toLowerCase();
		setInput(text);
		if (text.trim()) {
			setFilteredComponents((prev) =>
				components.filter((component) =>
					component.name.toLowerCase().includes(text.trim())
				)
			);
		} else {
			setFilteredComponents([]);
		}
	}
	return (
		<header className="h-[10vh] min-h-[50px] p-2 flex items-center justify-between shadow-md shadow-gray-800 z-10 sticky top-0">
			<Link to="/">
				<img className="w-[200px] hidden sm:block" src={logo} alt="" />
				<img className="w-[80px] sm:hidden" src={smallLogo} alt="" />
			</Link>
			<div
				className=" hidden md:flex w-[50%] gap-2 items-center p-2 rounded-md border border-black cursor-pointer dark:bg-gray-600"
				onClick={() => setOpenModal(true)}
			>
				<AiOutlineSearch />
				<p>Search Components here...</p>
			</div>
			<div className="flex gap-4 items-center">
				<div
					className="md:hidden cursor-pointer"
					onClick={() => setOpenModal(true)}
				>
					<AiOutlineSearch />
				</div>
				<Link className="hover:text-green-500" to="/install">
					Docs
				</Link>
				<a
					href="https://github.com/aman3113"
					target="_blank"
					rel="noreferrer"
					className="hover:text-green-500"
				>
					Github
				</a>
				{theme === "dark" ? (
					<BsSunFill
						onClick={() => setTheme("light")}
						className="cursor-pointer"
					/>
				) : (
					<BsMoonFill
						onClick={() => setTheme("dark")}
						className="cursor-pointer"
					/>
				)}
				<div className="md:hidden">
					<GiHamburgerMenu onClick={() => setOpenDrawer(true)} />
				</div>
			</div>
			<Modal
				isOpen={openModal}
				onClose={() => setOpenModal(false)}
				scrollBehavior="inside"
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						<div className="p-2 border border-green-500 rounded-md flex items-center gap-2">
							<AiOutlineSearch />
							<input
								type="search"
								placeholder="search components..."
								onChange={handleSearch}
								className="focus:outline-none w-full"
								value={input}
							/>
						</div>
					</ModalHeader>
					{filteredComponents.length > 0 && (
						<ModalBody>
							<div className="flex flex-col border-t-2">
								{filteredComponents.map((component, idx) => (
									<Link
										key={idx}
										to={`/${component.path}`}
										className="p-4 border-y hover:bg-green-200"
										onClick={() => setOpenModal(false)}
									>
										{component.name}
									</Link>
								))}
							</div>
						</ModalBody>
					)}
				</ModalContent>
			</Modal>
			<Drawer
				isOpen={openDrawer}
				placement="left"
				onClose={() => setOpenDrawer(false)}
			>
				<DrawerOverlay />
				<DrawerContent className="dark:bg-gray-700 dark:text-white">
					<DrawerCloseButton />
					<DrawerHeader>Navigate</DrawerHeader>

					<DrawerBody padding="0">
						<SideBar />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</header>
	);
};

export default Header;
