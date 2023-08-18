import React from "react";
import { Card } from 'flowbite-react';

export default function CardPage() {
    return (

        <div className="flex justify-center">
            <Card
                className="mx-8 max-w-sm"
                href="#"
            >
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                         src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Darren Christoper</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Programmer</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                    </div>
                </div>
            </Card>


            <Card
                className="mx-8  max-w-sm bg-gray-300"
                href="#"

            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                      Hello & Welcome !
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        I am currently a master of Computer Science student in Illinois Institute of Technology
                    </p>
                </p>
            </Card>
            </div>
)
}