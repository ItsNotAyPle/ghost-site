import React from "react";

interface INavItemProps {
    href:string;
    text:string;
}

interface INavWrapperProps {
    children?:React.ReactElement[] | React.ReactElement;
}

const NavWrapper = ({children}:INavWrapperProps) => {
    return (
        <ul className="flex flex-row ml-0 text-center justify-center md:ml-8 md:text-left">
            {children}
        </ul>
    );
}

const NavItem = (props:INavItemProps) => {
    return (
        <li className="px-2 hover:underline h-fit">
            <a className="text-xl font-medium" href={props.href}>{props.text}</a>
        </li>
    );
}



export const Navbar = () => {
    return (
        <nav className="py-5 bg-black text-white">
            <div className="container flex flex-col lg:flex-row flex-wrap  ml-0 text-center md:text-left md:ml-12 ">
                <a href="/">
                    <h1 className="font-bold text-2xl ">Paranormal Invesigations</h1>
                </a>
                <NavWrapper>
                    {/* <NavItem href="/about" text="About" /> */}
                    <NavItem href="/contact" text="Contact Us" />
                </NavWrapper>
            </div>
        </nav>
    );
}