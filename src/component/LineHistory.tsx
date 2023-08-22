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
        <div className="flex justify-center">
        <Card >
        <Timeline>
            <AnimateOnScroll reappear>
              <TimeComponentref  time={'Sept 2017'} title={'Xi an Jiao Tong Liverpool University'} body={'Admitted in the University'} href={'https://www.xjtlu.edu.cn/en'} />

            </AnimateOnScroll>
            <AnimateOnScroll reappear>
            <TimeComponentref time={'Oct 2019'} title={'Climathon'} body={'Participate in a competition solution for climate problems'} href={'https://climathon.climate-kic.org/'}/>
                </AnimateOnScroll>
            <AnimateOnScroll reappear>
             <TimeComponentref time={'Nov 2020'} title={'Future Investor 2020'} body={'Attend a webinar focusing on Investment and mutual fund'} href={'https://ppitiongkok.org/tag/future-investors/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll reappear>
                <TimeComponent time={'July 2022'} title={'Xi an Jiao Tong Liverpool University'} body={'Graduated as Bsc in Information Management Information System'}/>
            </AnimateOnScroll>
            <AnimateOnScroll reappear>
                <TimeComponentref time={'July 2022- 2023'} title={'PT Hoki Distribution Niaga'} body={'Working as Programmer in Website and Mobile application'} href={'https://www.linkedin.com/company/pt-hoki-distribusi-niaga/'}/>
            </AnimateOnScroll>
            <AnimateOnScroll reappear>
                <TimeComponentref time={'Aug 2023'} title={'Illinois Institute of Technology'} body={'Admitted on the University as Master in Computer Science'} href={'https://www.iit.edu/'}/>
            </AnimateOnScroll>
        </Timeline>
        </Card>
        </div>
            </>
    )
}


