import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
			<GlobalStyle />
		</ThemeProvider>
	</React.StrictMode>
);
