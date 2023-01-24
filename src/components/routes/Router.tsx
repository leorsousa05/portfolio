import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { useTheme } from "styled-components";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import GlobalStyle from "../styles/global";

export default function AppRouter() {
    const { setTheme } = useTheme()

    return (
        <Layout>
            <ThemeContextProvider>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>

        </Layout>
    )
}
