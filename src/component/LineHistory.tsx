'use client';

import React from 'react';
import AnimateOnScroll from './ScrollAnimation';

const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif';

interface Entry {
    time: string;
    title: string;
    body: string;
    href?: string;
}

const entries: Entry[] = [
    { time: 'Sept 2017', title: "Xi'an Jiaotong-Liverpool University & University of Liverpool", body: 'Admitted — B.S. in Information Management & Information Systems (dual degree)', href: 'https://www.xjtlu.edu.cn/en' },
    { time: 'Oct 2019', title: 'Climathon', body: 'Participated in a competition delivering solutions for climate problems', href: 'https://climathon.climate-kic.org/' },
    { time: 'Nov 2020', title: 'Future Investor 2020', body: 'Attended a webinar focused on investment and mutual funds', href: 'https://ppitiongkok.org/tag/future-investors/' },
    { time: 'Jul 2022', title: "Xi'an Jiaotong-Liverpool University / University of Liverpool — Graduated", body: 'B.S. in Information Management & Information Systems (dual degree)' },
    { time: 'Jul 2022 – Jul 2023', title: 'PT Hoki Distribution Niaga — Software Engineer', body: 'Developed dynamic web pages with JavaScript & PHP, migrated legacy features to a hybrid mobile app using Ionic Angular, and engineered scalable backend solutions for high-traffic distribution systems.', href: 'https://www.linkedin.com/company/pt-hoki-distribusi-niaga/' },
    { time: 'Aug 2023', title: 'Illinois Institute of Technology — Admitted', body: 'M.A.S. in Computer Science', href: 'https://www.iit.edu/' },
    { time: 'Oct 2023 – Aug 2025', title: 'IIT — Research Assistant, AI', body: 'Built scalable web applications with PHP, Laravel, Angular Material, and GCP. Processed large datasets using Python (BERT/CNN models). Implemented serverless backends with AWS Lambda and CI/CD pipelines.', href: 'https://www.iit.edu/' },
    { time: 'Aug 2025', title: 'Illinois Institute of Technology — Graduated', body: 'M.A.S. in Computer Science' },
    { time: 'Jan 2026 – Present', title: 'Afila Labs — Robotics & Embedded Systems', body: 'Configuring LiDAR sensors on Jetson Nano Orin platform. Developing a robotic solution for sewer pipeline inspection applied to real-world infrastructure challenges.', href: 'https://www.linkedin.com/' },
];

function TimelineEntry({ time, title, body, href }: Entry) {
    return (
        <div style={{ display: 'flex', gap: 24, position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#0071e3', border: '2px solid #fff', boxShadow: '0 0 0 2px #0071e3', zIndex: 1, marginTop: 4, flexShrink: 0 }} />
                <div style={{ width: 1, background: 'rgba(0,0,0,0.1)', flex: 1, marginTop: 8 }} />
            </div>
            <div style={{ paddingBottom: 40, flex: 1 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#0071e3', letterSpacing: '0.02em', margin: '0 0 6px', textTransform: 'uppercase' }}>{time}</p>
                <h3 style={{ fontSize: 19, fontWeight: 600, color: '#1d1d1f', letterSpacing: '-0.022em', margin: '0 0 8px', lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 15, color: '#6e6e73', lineHeight: 1.7, margin: 0, letterSpacing: '-0.01em' }}>{body}</p>
                {href && (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 12, fontSize: 13, fontWeight: 500, color: '#0071e3', textDecoration: 'none' }}
                    >
                        Learn more
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
}

export default function DefaultTimeline() {
    return (
        <section style={{ background: '#fff', padding: '80px 22px', fontFamily: FONT }}>
            <div style={{ maxWidth: 640, margin: '0 auto' }}>
                {entries.map((entry) => (
                    <AnimateOnScroll key={entry.time}>
                        <TimelineEntry {...entry} />
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
    );
}
