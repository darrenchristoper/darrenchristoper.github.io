import React from "react";


export default function HeaderPage() {
    return (
        <header id="header">
            <div className="flex justify-center">
                <a href="/"  className="basis-1/6 shadow-xl text-center rounded-sm">home</a>
                <a  href="/about" className="basis-1/6 shadow-xl  text-center rounded-sm">about</a>
                <a  href="/contact" className="basis-1/6 shadow-xl  text-center rounded-sm">contact</a>
            </div>
        </header>
    )
}