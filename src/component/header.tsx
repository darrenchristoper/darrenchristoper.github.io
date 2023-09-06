import { Navbar } from "flowbite-react";
import React from "react";
import react from "@astrojs/react";


export default function HeaderPage(props: any) {
    return (
        <header id="header" >
           <div >
            <Navbar
                fluid
                rounded
                style={{margin:"10px"}}
            >
                <Navbar.Brand href="/">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/dc.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
           Darren Christoper
        </span>
                </Navbar.Brand>

                <Navbar.Collapse >
                    <Navbar.Link


                        href="/"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/about"
                                 className={props.active === "about" ? "active:text-blue-500" : ""}
                    >
                        About
                    </Navbar.Link>
                    <Navbar.Link href="/contact"
                                 className={props.active === "contact" ? "active:text-blue-500" : ""}

                    >
                        Contact
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
           </div>
        </header>
    )
}