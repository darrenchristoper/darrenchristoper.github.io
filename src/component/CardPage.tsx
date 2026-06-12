import React, { useEffect, useRef } from "react";

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

// Different parallax depths per card — column position drives the feel
// Higher = moves more relative to scroll (appears "closer")
const PARALLAX_SPEEDS = [0.06, 0.03, 0.09, 0.04, 0.07, 0.05];

const skillGroups: { category: string; items: string[] }[] = [
    { category: "Frameworks", items: ["Laravel", "Angular", "Ionic", "Flask", "Next.js", "Spring Boot", "React"] },
    { category: "Languages", items: ["PHP", "TypeScript", "JavaScript", "Java", "Python", "C#", "Ruby"] },
    { category: "Cloud & DevOps", items: ["GCP", "AWS Lambda", "Docker", "GitHub Actions", "CI/CD", "Linux/UNIX"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "NoSQL"] },
    { category: "Testing", items: ["Selenium", "JUnit", "PHPUnit", "JMeter"] },
    { category: "AI & ML", items: ["BERT", "CNN", "Vision Transformer", "MobileNet", "LLM"] },
];

export default function CardPage() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    let raf = 0;

    useEffect(() => {
        function update() {
            cardRefs.current.forEach((card, i) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
                const speed = PARALLAX_SPEEDS[i] ?? 0.05;
                card.style.transform = `translateY(${centerOffset * speed * -1}px)`;
            });
            raf = 0;
        }

        function onScroll() {
            if (!raf) raf = requestAnimationFrame(update);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        update();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section style={{ background: '#f5f5f7', padding: '96px 22px', fontFamily: FONT }}>
            <div style={{ maxWidth: 980, margin: '0 auto' }}>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.003em', lineHeight: 1.08, marginBottom: 10, textAlign: 'center' }}>
                    Skills &amp; Technologies
                </h2>
                <p style={{ fontSize: 19, color: '#6e6e73', textAlign: 'center', marginBottom: 56, letterSpacing: '-0.01em', lineHeight: 1.5 }}>
                    Technologies across full-stack, cloud, and AI
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                    {skillGroups.map(({ category, items }, i) => (
                        <div
                            key={category}
                            ref={el => { cardRefs.current[i] = el; }}
                            style={{
                                background: '#fff',
                                borderRadius: 18,
                                padding: '28px 24px',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                                willChange: 'transform',
                            }}
                        >
                            <h3 style={{ fontSize: 11, fontWeight: 700, color: '#6e6e73', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                                {category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {items.map(skill => (
                                    <span
                                        key={skill}
                                        style={{ padding: '6px 14px', fontSize: 13, fontWeight: 500, color: '#1d1d1f', background: '#f5f5f7', borderRadius: 980 }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
