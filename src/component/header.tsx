import { Navbar } from "flowbite-react";
import React from "react";

interface HeaderProps {
    active?: "home" | "about" | "contact" | "history" | "projects";
}

export default function HeaderPage(props: HeaderProps) {
    return (
        <header id="header">
            <Navbar fluid rounded style={{margin:"10px"}}>
                <Navbar.Brand href="/">
                    <img
                        alt="Darren Christoper Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/dc.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Darren Christoper
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/" active={props.active === "home"}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about" active={props.active === "about"}>
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/projects" active={props.active === "projects"}>
                        Projects
                    </Navbar.Link>
                    <Navbar.Link href="/history" active={props.active === "history"}>
                        History
                    </Navbar.Link>
                    <Navbar.Link href="/contact" active={props.active === "contact"}>
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}