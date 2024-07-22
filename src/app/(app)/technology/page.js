import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Big Wave Surf - Technology',
}

const Home = () => {
    return (
        <>
        
        <Header title="Big Wave Surf - Technology" />
        
        <div className="relative flex sm:items-center sm:pt-0">

            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Technologies Used
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>I have used a variety of robust libraries and first-party
                                tools for this application that fit together with the Laravel framewrofk and eco-system. 
                                Many of the choices in my technology decision are based on keeping the application as simple as possible
                                and using first party tools in order to accomplish the goal of this application and the RUBRIC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Laravel - PHP Framework
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>
                                Laravel is a web application framework with expressive, elegant syntax designed for backend applications.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Horizon - Queuing and Job processing (used for scraping data)
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>If you are logged in wuth the user provided you will be able to access my Horizon application at this link: <a href="https://bigwavesurf.test/horizon/dashboard" className='text-green-600'>Horizon</a></p>
                                <br />
                                <p>This allows my application to run scheduled jobs and commands which are put into queues and run programatically. Ideally used for long background jobs which consume high resources like image or document processing as well as running crons at specified times.</p>
                                <br />
                                <p><a href="https://bigwavesurf.apphouse.co.za/horizon/dashboard" className='text-green-600'>Click here to access this applications Horizon app directly</a></p>
                                <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Telescope - Monitoring, Analysing and Debugging
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <p>
                                    Telescope makes a wonderful companion to your local Laravel development environment. Telescope provides insight into the requests coming into your application, exceptions, log entries, database queries, queued jobs, mail, notifications, cache operations, scheduled tasks, variable dumps, and more.
                                    </p>
                                    <br />
                                    <p><a href="https://bigwavesurf.apphouse.co.za/telescope" className='text-green-600'>Click here to access this applications Telescope app directly</a></p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Pulse - Application Performance and Monitoring
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <p>
                                    Pulse delivers at-a-glance insights into your application's performance and usage. With Pulse, you can track down bottlenecks like slow jobs and endpoints, find your most active users, and more.
                                    </p>
                                    <br />
                                    <p><a href="https://bigwavesurf.apphouse.co.za/pulse" className='text-green-600'>Click here to access this applications Pulse app directly</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Forge - Continous Integration
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>
                                I used Forge for a variety of things that include my Continous Integration. When I push to my Bitbucket repo I hooked up an automatic trigger that pushes my latest code changes to my server. I also use Forge to directly manage my server configuration like nginx, php and other configuration directly.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Envoyer - Continous Delivery (no downtime)
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>
                                Envoyer serves as the Continous Delivery stack that I used on this project and many others. Its main purpose is to provide a 0 DownTime deployment which is required to give the end user the best possible experience during deplyments with absolutely 0% downtime.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        NextJs - Frontend Framework
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>
                                This application you are viewing is built in NextJS. Its a frontend framework used to pull the restful APIs and display the dynamic data in an easy to use User Interface.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        Redis - Advanced key-value store | Data Persistence
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>
                                Redis is an open source, advanced key-value store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, and sorted sets.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>

                                <div className="ml-4 text-lg leading-7 font-semibold">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="underline text-dark">
                                        MySQL - Open-source relational database management
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <p>
                                
MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                    <div className="text-center text-sm text-gray-500 sm:text-left">
                        <div className="flex items-center">
                            CSCA5028 Final Project
                        </div>
                    </div>

                    <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                        Built by Alexander Molde
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
