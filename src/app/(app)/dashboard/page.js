"use client"
import React, { useState, useEffect } from "react"
import Header from '@/app/(app)/Header'

const Dashboard = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/waves/area/capepoint")
      const json = await response.json()
      setData(json)
    }

    fetchData()
  }, [])

  return (
    <div>
        <Header title="Big Wave Surf - Architecture" />
        
        <div className="relative flex sm:items-center sm:pt-0">
            {/* <LoginLinks /> */}

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
                                        High Level Overview
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                <h1 className="underline">High Level Overview</h1>
                                <br />
                                <p>A dynamic swell and surf report generated by scraping data daily from NOAA GFS Wave Model: Atlantic Bouys. Ref: Data available here.</p>
                                <p><a href="https://mag.ncep.noaa.gov/model-guidance-model-parameter.php?group=Model%20Guidance&model=gfs-wave&area=se-coast&param=sig_wv_ht&fourpan=no&imageSize=M&ps=area&fhr_mode=image&loop_start=-1&loop_end=-1&skip_num=1" className='text-green-600'>Cick here to access the raw data available here.</a></p>
                                <br />
                                <p>This project scrapes the source daily using a scheduler and queuing system called Horzon/Supervisor. I built RESTful APIs which are served securely from a Laravel backend using JWTs (JSON Web Tokens) on this frontend application using NextJS.</p>
                                <br />
                                <p>I use Telescope and Pulse to monitor the applications performance and to analyse anything required.</p>
                                <br />
                                <p>I use Redis to persist the data and cache as much as possible to improve performance. I use MySQL as a relational database as I plan on extending this into a full app with thousands of users and will need relational mapping.</p>
                                <br />
                                <p>I use PHPUnit for testing of the Authentication and Swell endpoints created which run on my CI during deployments. For the CD I use Envoyer which also provides 0% downtime.</p>
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
                                        Swell Station Data
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <p>{new Date().toDateString()}</p>
                                    {data.station ? (
                                        <p>{data.station.name}</p>
                                    ) : (
                                        <p>The content is hidden</p>
                                    )}
                                    {data.station ? (
                                        <p>{data.station.id} : {JSON.stringify(data.station.lat)} &deg; N, {JSON.stringify(data.station.lon)} &deg; E</p>
                                    ) : (
                                        <p>The content is hidden</p>
                                    )}
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
                                        Waves
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    {data.predicted ? (
                                        <p>{JSON.stringify(Math.ceil(data.predicted[0].wave_summary.wave_height * 10) / 10, null, 2)} {data.predicted[0].wave_summary.wave_height_units} @  {JSON.stringify(Math.ceil(data.predicted[0].wave_summary.period * 10) / 10, null, 2)} <span className="uppercase">{data.predicted[0].wave_summary.compass_direction}</span></p>
                                    ) : (
                                        <p>The content is hidden</p>
                                    )}
                                    <p>Swell components</p>
                                    <p>1.4 ft @ 8.3 s SE 140°</p>
                                    <p>1.1 ft @ 6.7 s S 179°</p>
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
                                        Weather
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    {data.solar_forecast ? (
                                        <p>Sunrise: {data.solar_forecast[0].sunrise}</p>
                                    ) : (
                                        <p>The content is hidden</p>
                                    )}
                                    {data.solar_forecast ? (
                                        <p>Sunset: {data.solar_forecast[0].sunset}</p>
                                    ) : (
                                        <p>The content is hidden</p>
                                    )}
                                    {/* //TODO het the wind from another source */}
                                    <p>Wind: WSW 11 mph</p> 
                                    {/* //TODO het the water temp from another source */}
                                    <p>Water Tempreture: 73° F</p>
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
                                        Tides
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <img src="/images/tides.png" alt="Big Wave Surf" className="w-100 pb-3" />
                                    <span className="text-sm">TODO // Still need to build the UI graph dymanically.</span>
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
                                        Tides
                                    </a>
                                </div>
                            </div>
                            <div className="ml-12">
                                <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <img src="/images/forecast.png" alt="Big Wave Surf" className="w-100" />
                                    <span className="text-sm">TODO // Still need to build the UI graph dymanically.</span>
                                    <p className="pt-3">🌊⛅ NOAA GFS Wave Model: Atlantic 0.16 degree - 7/21 0z</p>
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
    </div>
  )
}

export default Dashboard