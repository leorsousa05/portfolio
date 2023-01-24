import { createContext, useContext, useState } from "react";
import { dark } from "../components/styles/themes/theme";
import { ThemeProvider } from "styled-components";
import {ThemeContextData, ThemesContextProps} from "./ThemeContext.interface";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export function ThemeContextProvider({ children }: ThemesContextProps) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(dark)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
