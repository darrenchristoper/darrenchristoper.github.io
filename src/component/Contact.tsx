'use client';

import { Card } from 'flowbite-react';
import React from 'react';


export default function Contact() {
    return (
        <>
            <br />
            <div className="flex justify-center">
                <Card>
                    <h5 className="mb-3 text-base font-semibold text-gray-900 dark:text-white lg:text-xl">
                        Connect to Social media
                    </h5>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">

                    </p>
                    <ul className="my-4 space-y-3">
                        <li>
                            <a
                                className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                href="https://github.com/darrenchristoper"
                            >
                               
                                <span className="ml-3 flex-1 whitespace-nowrap">
                                    Github
                                </span>

                            </a>
                        </li>
                        <li>
                            <a
                                className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                href="https://www.linkedin.com/in/darren-christoper-a50a85209/"
                            >
                                <span className="ml-3 flex-1 whitespace-nowrap">
                                    Linkedin
                                </span>
                            </a>
                        </li>



                    </ul>
                    <div>

                    </div>

                </Card>
            </div>
        </>
    )
}


