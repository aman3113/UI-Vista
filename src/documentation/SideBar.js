import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
} from "@chakra-ui/react";
import { components } from "./assets/data";
import { NavLink } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="p-2 md:w-[200px] w-full h-full overflow-y-auto font-semibold sidebar-shadow py-4">
			<Accordion allowToggle>
				<AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="left">
							Getting Started
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						<NavLink
							to="install"
							className={({ isActive }) =>
								`${isActive && "text-green-500"} hover:text-green-500`
							}
						>
							<Box className=" p-2">Installation</Box>
						</NavLink>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="left">
							Components
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>
						{components.map((component, idx) => (
							<NavLink
								to={component.path}
								key={idx}
								className={({ isActive }) =>
									`${isActive && "text-green-500"} hover:text-green-500`
								}
							>
								<Box className=" p-2">{component.name}</Box>
							</NavLink>
						))}
					</AccordionPanel>
				</AccordionItem>

				{/* <AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="left">
							Layout
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel pb={4}>Installation</AccordionPanel>
				</AccordionItem> */}
			</Accordion>
		</div>
	);
};

export default SideBar;
