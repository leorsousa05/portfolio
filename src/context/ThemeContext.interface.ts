import { DefaultTheme } from "styled-components"

export interface ThemeContextData {
    setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>
    theme: DefaultTheme
}

export interface ThemesContextProps {
    children: React.ReactNode
}
