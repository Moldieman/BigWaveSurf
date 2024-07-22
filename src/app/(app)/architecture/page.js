import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Big Wave Surf - Architecture',
}

const Home = () => {
    return (
        <>
        <Header title="Big Wave Surf - Architecture" />
        
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
                                        Whiteboard Architecture
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <p>I used a domain driven design architecture when building this application. I used the "Separation of Concerns" princple when building this app trying to keep each peice of software independant of each other. Here is a splurb from the docs: </p>
                                    <br />
                                    <p><i>The principle is simple: don’t write your program as one solid block, instead, break up the code into chunks that are finalized tiny pieces of the system each able to complete a simple distinct job.</i></p>  
                                    <br />
                                    <p>Here is my Whiteboard Solution which I did using Draw.io</p>
                                    <br />
                                    <div className='bg-white p-5'>
                                        <img src="/images/BigWaveSurf-Architecture.jpg" alt="Big Wave Surf" />
                                    </div>
                                    <br />
                                    <p>I used a combination of MySQL as a relational database as well as flat JSON files to store and read data from. My scrapper endpoint grabs the data from a specific url then grabs all the required data which I then use a reference in the MySQL DB. The frontend application which is built in NextJS consumes this API from my backend server called Swells.</p>
                                    <p>I used a variety of tools from the Laravel architecture which makes building a full stack application incredibly easy. You get Monitoring, Queuing, Performance, Broadcasting just to name a fe right out of the box with the configurations your require.</p>
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
                                        System Requirements and Utilities
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <div>
                                        <ul className='list-disc pl-5'>
                                            <li>Backend - Laravel (Testable; Both unit and integration)</li>
                                            <li>Database - MySQL (Relational)</li>
                                            <li>Scrapper - Roach (https://roach-php.dev/docs/introduction)</li>
                                            <li>Tests - Unit Tests</li>
                                            <li>Telescope - Data Analyser</li>
                                            <li>Health Check - Laravel Up (<a href="https://bws.apphouse.co.za/up">https://bws.apphouse.co.za/up)</a></li>
                                            <li>Frontend - NextJS, React and Tailwind</li>
                                            <li>Forge - CI</li>
                                            <li>Envoyer - CD</li>
                                        </ul>
                                    </div>
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
                                        Project Requirements (from project rubric)
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <div>
                                    <div className='pt-5'>
                                        <ul className='list-disc pl-5'>
                                            <li>Web application basic form, reporting</li>
                                            <ol className='list-disc pl-5'>
                                                <li>I built the login and authentication functionality using JWTs with a forgot password feature too which emails a reset password to the customer.</li>
                                            </ol>
                                            <li>Data Collection</li>
                                            <ol className='list-disc pl-5'>
                                                <li>I built scheduler that run every night at 00:00 to crawl a specific URL and download all the JSON data to my server. I then grab the data and break it up into smaller chunks which I store in my DB.</li>
                                            </ol>
                                            <li>Data Analyser</li>
                                            <ol className='list-disc pl-5'>
                                                <li>The analysing of data is done through my Telescope (similar to Promothesius) application. This is where I am ale to analyse all my data amd metrics of the application.</li>
                                            </ol>
                                            <li>Unit Tests</li>
                                            <ol className='list-disc pl-5'>
                                                <li>I currently have unit tests for my user authentication, registration and login flows. I use PHPUnit to run these.</li>
                                            </ol>
                                            <li>Data Persistence</li>
                                            <ol className='list-disc pl-5'>
                                                <li>The use of REDIS is configured to push key-value pairs into memory and read from there. This boosts performance and increases stability on the application. </li>
                                            </ol>
                                            <li>Rest collaboration internal or API endpoint</li>
                                            <ol className='list-disc pl-5'>
                                                <li>I built RESTful endpoints in Laravel for the authentication and waves endpoints for all the CRUD and Scraper endpoints</li>
                                            </ol>
                                            <li>Product environment</li>
                                            <ol className='list-disc pl-5'>
                                                <li>This is a real application which I intend to extend to a large customer base over time. It can be visited @ <a href="https://bigwavesurf.apphouse.co.za">https://bigwavesurf.apphouse.co.za</a></li>
                                            </ol>
                                            <li>Integration tests</li>
                                            <ol className='list-disc pl-5'>
                                                <li>I have the user authentication integration test configured to work with my unit tests after each build in my CI.</li>
                                            </ol>
                                            <li>Using mock objects or any test doubles</li>
                                            <ol className='list-disc pl-5'>
                                                <li>Fake data is used for my login and regirstaion tests.</li>
                                            </ol>
                                            <li>Production monitoring Instrumenting</li>
                                            <ol className='list-disc pl-5'>
                                                <li>Telescope metrics and monitoring: <a href=""></a></li>
                                            </ol>
                                            <li>Health Checks</li>
                                            <ol className='list-disc pl-5'>
                                                <li>Telescope metrics and monitoring: <a href="https://bws.apphouse.co.za/up">https://bws.apphouse.co.za/up</a></li>
                                            </ol>
                                            <li>Event collaboration messaging</li>
                                            <ol className='list-disc pl-5'>
                                                <li>Not currently configured, I have Reverb planned to notify customers uing Socket.io</li>
                                            </ol>
                                            <li>Continuous integration</li>
                                            <ol className='list-disc pl-5'>
                                                <li>Bitbucket was used for the code repository and linked up to my Forge CI tool which handles automated pushes on commits and running of tests.</li>
                                            </ol>
                                            <li>Continuous delivery</li>
                                            <ol className='list-disc pl-5'>
                                                <li>My code repo is connect via SSH and once a build has been successful to push to my environment with 0% downtime via Envoyer</li>
                                            </ol>
                                        </ul>
                                    </div> 
                                    </div>
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
