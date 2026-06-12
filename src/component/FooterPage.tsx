import React from "react";

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/history", label: "History" },
    { href: "/contact", label: "Contact" },
];

export default function FooterPage() {
    return (
        <footer style={{ borderTop: '1px solid rgba(0,0,0,0.1)', background: '#f5f5f7', padding: '24px 22px', fontFamily: FONT }}>
            <div style={{ maxWidth: 980, margin: '0 auto' }}>
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: 16, marginBottom: 16, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                    {links.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            style={{ fontSize: 12, color: '#6e6e73', textDecoration: 'none', letterSpacing: '-0.01em' }}
                        >
                            {label}
                        </a>
                    ))}
                </div>
                <p style={{ fontSize: 12, color: '#6e6e73', letterSpacing: '-0.01em' }}>
                    Copyright &copy; 2026 Darren Christoper. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
