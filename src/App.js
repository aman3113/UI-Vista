import { ChakraProvider } from "@chakra-ui/react";
import "prismjs/themes/prism.css"; // Import a Prism theme
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./documentation/Header";
import Home from "./documentation/Home";
import Docs from "./documentation/Docs";
import { useState } from "react";
import AlertPage from "./documentation/Pages/AlertPage";
import AvatarPage from "./documentation/Pages/AvatarPage";
import ButtonPage from "./documentation/Pages/ButtonPage";
import BadgePage from "./documentation/Pages/BadgePage";
import CardPage from "./documentation/Pages/CardPage";
import HeadingPage from "./documentation/Pages/HeadingPage";
import ImagePage from "./documentation/Pages/ImagePage";
import TextPage from "./documentation/Pages/TextPage";
import InstallationPage from "./documentation/Pages/InstallationPage";

function App() {
	const [theme, setTheme] = useState("light");

	return (
		<div className={theme}>
			<div className="dark:bg-gray-700  dark:text-white h-[100vh]">
				<ChakraProvider>
					<BrowserRouter>
						<Header theme={theme} setTheme={setTheme} />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="docs" element={<Docs />}>
								<Route path="install" element={<InstallationPage />} />
								<Route path="alert" element={<AlertPage />} />
								<Route path="avatar" element={<AvatarPage />} />
								<Route path="button" element={<ButtonPage />} />
								<Route path="badge" element={<BadgePage />} />
								<Route path="card" element={<CardPage />} />
								<Route path="heading" element={<HeadingPage />} />
								<Route path="image" element={<ImagePage />} />
								<Route path="text" element={<TextPage />} />
							</Route>
						</Routes>
					</BrowserRouter>
				</ChakraProvider>
			</div>
		</div>
	);
}

export default App;
