import { Navbar } from "./navbar";
import React from "react";
import type { ReactChildrenType } from "../interfaces/types";

export interface IWrapperProps {
    children: ReactChildrenType;
    disable_nav?: boolean;
}

export default function Wrapper(props:IWrapperProps) {
    return (
        <main>
            <div className="w-screen h-screen">
                {!props.disable_nav && <Navbar />}
                {props.children}
            </div>
        </main>
    );
}