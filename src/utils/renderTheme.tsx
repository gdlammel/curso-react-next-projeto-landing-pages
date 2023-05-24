import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { theme } from "../styles/theme";

export function renderTheme(children: ReactNode) {
	return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
