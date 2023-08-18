import {Footer} from "flowbite-react";
import React from "react";

export default function FooterPage() {
    return (
        <>
            <Footer container>
                <Footer.Copyright
                    by="Darren Christoper™"
                    href="#"
                    year={2023}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="/">
                     Home
                    </Footer.Link>
                    <Footer.Link href="/about">
                        About
                    </Footer.Link>
                    <Footer.Link href="/contact">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    )
}