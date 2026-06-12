import React, { useState } from "react";

interface HeaderProps {
    active?: "home" | "about" | "contact" | "history" | "projects";
}

const navLinks = [
    { href: "/", label: "Home", key: "home" },
    { href: "/about", label: "About", key: "about" },
    { href: "/projects", label: "Projects", key: "projects" },
    { href: "/history", label: "History", key: "history" },
    { href: "/contact", label: "Contact", key: "contact" },
] as const;

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

export default function HeaderPage({ active }: HeaderProps) {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="sticky top-0 z-50"
            style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'saturate(180%) blur(20px)',
                WebkitBackdropFilter: 'saturate(180%) blur(20px)',
                borderBottom: '1px solid rgba(0,0,0,0.12)',
                fontFamily: FONT,
            }}
        >
            <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 22px', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
                    <img src="/dc.svg" alt="DC" style={{ height: 18 }} />
                    <span style={{ fontSize: 17, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.022em' }}>
                        Darren Christoper
                    </span>
                </a>

                <nav className="hidden md:flex" style={{ gap: 28, alignItems: 'center' }}>
                    {navLinks.map(({ href, label, key }) => (
                        <a
                            key={key}
                            href={href}
                            style={{
                                fontSize: 12,
                                letterSpacing: '-0.01em',
                                fontWeight: active === key ? 600 : 400,
                                color: active === key ? '#1d1d1f' : '#6e6e73',
                                textDecoration: 'none',
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <button
                    className="md:hidden"
                    onClick={() => setOpen(o => !o)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0 }}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M2 2L16 16M16 2L2 16" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <line x1="2" y1="5" x2="16" y2="5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="2" y1="9" x2="16" y2="9" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="2" y1="13" x2="16" y2="13" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    )}
                </button>
            </div>

            {open && (
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)' }}>
                    {navLinks.map(({ href, label, key }) => (
                        <a
                            key={key}
                            href={href}
                            style={{
                                display: 'block',
                                padding: '14px 22px',
                                fontSize: 17,
                                fontWeight: active === key ? 600 : 400,
                                color: active === key ? '#1d1d1f' : '#6e6e73',
                                textDecoration: 'none',
                                borderBottom: '1px solid rgba(0,0,0,0.06)',
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
