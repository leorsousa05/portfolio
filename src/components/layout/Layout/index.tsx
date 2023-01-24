import React from "react";
import Header from "../Header/";

interface PropsInterface { children: React.ReactNode }

export default function Layout({ children }: PropsInterface) {
    return(
        <>
            <Header/>
            { children }
        </>
    )
}
