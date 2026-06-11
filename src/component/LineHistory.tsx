'use client';

import { Button, Timeline , Card  } from 'flowbite-react';
import React from 'react';
import AnimateOnScroll from './ScrollAnimation';


interface SampleComponentProps {
    time:React.ReactNode,
    title:React.ReactNode,
    body: React.ReactNode,

}

interface SampleComponentPropsWithref {
    time:React.ReactNode,
    title:React.ReactNode,
    body: React.ReactNode,
    href: string
}
const TimeComponent = ({ time , title, body}: SampleComponentProps) => {
    return (
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
                <Timeline.Time>
                    {time}
                </Timeline.Time>
                <Timeline.Title>
                    {title}
                </Timeline.Title>
                <Timeline.Body> <p>{body}</p></Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    )
}

const TimeComponentref = ({ time , title, body , href}: SampleComponentPropsWithref) => {
    return (
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
                <Timeline.Time>
                    {time}
                </Timeline.Time>
                <Timeline.Title>
                    {title}
                </Timeline.Title>
                <Timeline.Body>
                    <p>
                    {body}
                    </p>
                    <br/>
                    <a href={href}>
                    <Button color="gray">
                        <p>
                            Learn More
                        </p>
                    </Button>
                    </a>
                </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    )
}

export default function DefaultTimeline() {
    return (
        <>

            <br/>
        <div className="flex justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
        <Timeline>
            <AnimateOnScroll>
              <TimeComponentref time={'Sept 2017'} title={'Xi\'an Jiaotong-Liverpool University & University of Liverpool'} body={'Admitted — B.S. in Information Management & Information Systems (dual degree)'} href={'https://www.xjtlu.edu.cn/en'} />
            </AnimateOnScroll>
            <AnimateOnScroll>
            <TimeComponentref time={'Oct 2019'} title={'Climathon'} body={'Participated in a competition delivering solutions for climate problems'} href={'https://climathon.climate-kic.org/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
             <TimeComponentref time={'Nov 2020'} title={'Future Investor 2020'} body={'Attended a webinar focused on investment and mutual funds'} href={'https://ppitiongkok.org/tag/future-investors/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <TimeComponent time={'Jul 2022'} title={'Xi\'an Jiaotong-Liverpool University / University of Liverpool — Graduated'} body={'B.S. in Information Management & Information Systems (dual degree)'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <TimeComponentref time={'Jul 2022 – Jul 2023'} title={'PT Hoki Distribution Niaga — Software Engineer'} body={'Developed dynamic web pages with JavaScript & PHP, migrated legacy features to a hybrid mobile app using Ionic Angular, and engineered scalable backend solutions for high-traffic distribution systems.'} href={'https://www.linkedin.com/company/pt-hoki-distribusi-niaga/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <TimeComponentref time={'Aug 2023'} title={'Illinois Institute of Technology — Admitted'} body={'M.A.S. in Computer Science'} href={'https://www.iit.edu/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <TimeComponentref time={'Oct 2023 – Aug 2025'} title={'IIT — Research Assistant, AI'} body={'Built scalable web applications with PHP, Laravel, Angular Material, and GCP. Processed large datasets using Python (BERT/CNN models). Implemented serverless backends with AWS Lambda and CI/CD pipelines.'} href={'https://www.iit.edu/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <TimeComponent time={'Aug 2025'} title={'Illinois Institute of Technology — Graduated'} body={'M.A.S. in Computer Science'}/>
            </AnimateOnScroll>
            <AnimateOnScroll>
                <TimeComponentref time={'Jan 2026 – Present'} title={'Afila Labs — Robotics & Embedded Systems'} body={'Configuring LiDAR sensors on Jetson Nano Orin platform. Developing a robotic solution for sewer pipeline inspection applied to real-world infrastructure challenges.'} href={'https://www.linkedin.com/'}/>
            </AnimateOnScroll>
        </Timeline>
        </div>
        </div>
            </>
    )
}


