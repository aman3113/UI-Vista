import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./documentation/Header";
import Home from "./documentation/Home";
import Docs from "./documentation/Docs";

function App() {
	return (
		<div>
			<ChakraProvider>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="docs" element={<Docs />}></Route>
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</div>
	);
}

export default App;
