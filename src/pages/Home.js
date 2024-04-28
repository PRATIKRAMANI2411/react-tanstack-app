import React from 'react';

const Home = () => {
    return (
        <>
            <div className='main-div bg-gray-100'>
                <section className="text-gray-600 mb-4 body-font shadow-lg bg-white transition-shadow">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap justify-center">
                            <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                                <h1 className="text-5xl text-gray-900 mb-2">25</h1>
                                <p className="leading-relaxed text-base mb-4">Total Machine</p>
                            </div>
                            <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                                <div className='flex justify-center'>
                                    <span className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <div className='block mx-3'>
                                        <p className="flex leading-relaxed  mb-1">02</p>
                                        <p className="leading-relaxed text-base mb-2">Machines</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-gray-900 font-bold mb-4">Pressure</p>
                            </div>
                            <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                                <div className='flex justify-center'>
                                    <span className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <div className='block mx-3'>
                                        <p className="flex leading-relaxed text-base mb-1">02</p>
                                        <p className="leading-relaxed text-base mb-2">Machines</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-base text-gray-900 font-bold mb-4">Temperature</p>
                            </div>
                            <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                                <div className='flex justify-center'>
                                    <span className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <div className='block mx-3'>
                                        <p className="flex leading-relaxed text-base mb-1">02</p>
                                        <p className="leading-relaxed text-base mb-2">Machines</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-base text-gray-900 font-bold mb-4">Vibration</p>
                            </div>
                            <div className="xl:w-1/5 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                                <div className='flex justify-center'>
                                    <span className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 self-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                        </svg>
                                    </span>
                                    <div className='block mx-3'>
                                        <p className="flex leading-relaxed text-base mb-1">02</p>
                                        <p className="leading-relaxed text-base mb-4">Machines</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-base text-gray-900 font-bold mb-4">Gas flow</p>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="container px-4">
                    <div className="flex flex-wrap justify-center xl:justify-between">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-2 py-2 text-center">
                            <div className="p-4 border rounded-lg shadow-lg bg-white transition-shadow">

                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-sm font-semibold">Machine 1</h2>
                                    <div className="text-red-500" aria-label="Alerts" role="alert">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 inline-block"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>2 Alerts</span>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6m0 0h6m-6 0H6"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">1200 psi</p>
                                            <p className="text-sm text-zinc-500">Pressure</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m0 0h-3m3 0h3" />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">10 hz</p>
                                            <p className="text-sm text-zinc-500">Vibration</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 3v18m0 0H9m3 0h3"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">150 °C</p>
                                            <p class="text-sm text-zinc-500">Temperature</p>
                                        </div>
                                    </div>


                                    <div className="flex">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6 mx-auto mb-1"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v12m0 0H9m3 0h3M6 12h12"
                                            />
                                        </svg>
                                        <div>
                                            <p className="text-sm font-semibold">2.4 kg/s</p>
                                            <p className="text-sm text-zinc-500">Gas flow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
