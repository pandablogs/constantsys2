import React, { useEffect } from 'react';
import './contact.scss';
import map from '../assets/images/map.png';

const Contact = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    },[])
    return (
        <div id='ContactUS'>
            <div className="max-w-[96rem] pt-[80px] relative bg-white z-10 m-auto w-full">
                <div className="m-auto w-[90%]">
                    <div id="contact-us" className="relative flex flex-col justify-center py-[55px] md:px-[80px] xl:flex-row  xl:gap-x-11">
                        <div className="relative w-full xl:w-2/5  overflow-hidden px-8 pb-8 mx-auto bg-white">
                            <h2 className="text-gray-800 text-3xl font-semibold">Get In <span className='text-primary'>Touch</span></h2>
                            <p className="text-sm text-gray-500 mt-4 leading-relaxed">Have a specific inquiry or looking to explore new opportunities? Our
                                experienced team is ready to engage with you.</p>

                            <form>
                                <div className="space-y-4 mt-8">
                                    <input type="text" placeholder="Full Name"
                                        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none" />
                                    <input type="text" placeholder="Street"
                                        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none" />
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="text" placeholder="City"
                                            className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none" />

                                        <input type="text" placeholder="Postcode"
                                            className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none" />
                                    </div>
                                    <input type="number" placeholder="Phone No."
                                        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none" />

                                    <input type="email" placeholder="Email"
                                        className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none" />

                                    <textarea placeholder="Write Message"
                                        className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-[#3498db] outline-none"></textarea>
                                </div>

                                <button type="button" className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#3498db] hover:bg-sky-600 text-white">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div className="hidden xl:block">
                            <div className="flex flex-1">
                                <div className="flex flex-col overflow-hidden">
                                    <div className="hidden xl:block">
                                        <img src={map} className='map' alt="World map" />
                                    </div>
                                    <p className="mt-[60px] text-center font-medium text-primary">
                                        Constantsys Technologies</p>
                                    <p className="text-center font-light text-[#111111]">
                                        Based in India&nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDkgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yLjgyNjEzIDAuMjczMjM5QzMuMTA2NzEgMC4yODE4MDYgMy4zODQ0OSAwLjMzNDU4NiAzLjY1MDIgMC40Mjk4MThIMy42NzY5NkMzLjY5MTgyIDAuNDM2OTI4IDMuNzA1NTQgMC40NDY0MjkgMy43MTc2MyAwLjQ1Nzk4QzMuODE1NzUgMC40ODk1MzUgMy45MTA3MyAwLjUzMTAzMyA0LjAwMTIzIDAuNTgxODkyTDQuMTczNTQgMC42NjE4NzFDNC4yNDA5NiAwLjY5OTYwOCA0LjMyMjMgMC43NzA1NzYgNC4zNjcyNSAwLjc5OTMwMUM0LjQxMzgyIDAuODI2MzY1IDQuNDU4ODQgMC44NTYyNjggNC41MDIxIDAuODg4ODU1QzQuOTk4MDQgMC40ODcxNiA1LjYwNjg3IDAuMjcwNTc4IDYuMjMyNjUgMC4yNzMyMzlDNi41MTY4NCAwLjI3MTEzNCA2Ljc5OTQ4IDAuMzE3NTQ2IDcuMDY5NTYgMC40MTA2NjhDOC43Mjg0IDAuOTc4OTcyIDkuMzI5MzMgMi44OTczNSA4LjgyOSA0LjU3NDY2QzguNTQ2MTYgNS40MzE1MSA4LjA4MzE5IDYuMjEwMSA3LjQ3NDY0IDYuODUyMzlDNi42MDU2MSA3LjczODEyIDUuNjUwNzUgOC41MjU1MSA0LjYyNTcxIDkuMjAxNjRMNC41MTMzNCA5LjI3MzE3TDQuMzk2MTUgOS4xOTcxM0MzLjM2NDQ1IDguNTIzMSAyLjQwMzcgNy43MzU1OSAxLjUzMDA5IDYuODQ3ODhDMC45MjQ0MDMgNi4yMDQ4NSAwLjQ2MTY2OSA1LjQyODQ4IDAuMTc1MTk0IDQuNTc0NjZDLTAuMzMzMTYxIDIuODk3MzUgMC4yNjcyMzMgMC45Nzg5NzIgMS45NDQyNyAwLjQwMDUzQzIuMDc0MTggMC4zNTM1MjggMi4yMDgyOSAwLjMyMDUwNCAyLjM0NDUzIDAuMzAxOTY0SDIuMzk4MDRDMi41MjMzMiAwLjI4Mjc0MyAyLjY0OTc2IDAuMjczMTQzIDIuNzc2MzcgMC4yNzMyMzlIMi44MjYxM1pNNi44MzU3MSAxLjc3MDMyQzYuNzQ1NTggMS43Mzg4IDYuNjQ3MjcgMS43NDYwNCA2LjU2MjE5IDEuNzkwNDVDNi40NzcxIDEuODM0ODYgNi40MTIxMyAxLjkxMjg1IDYuMzgxNDEgMi4wMDc0NEM2LjM1MTAzIDIuMTAzNTMgNi4zNTc2IDIuMjA4MzIgNi4zOTk3IDIuMjk5MzdDNi40NDE4IDIuMzkwNDMgNi41MTYxIDIuNDYwNTIgNi42MDY2OSAyLjQ5NDY0QzYuNzQ5MDcgMi41NTI2MSA2Ljg3MTM3IDIuNjU0NzUgNi45NTczNyAyLjc4NzUyQzcuMDQzMzcgMi45MjAyOCA3LjA4OTAzIDMuMDc3NDIgNy4wODgyOSAzLjIzODExVjMuMjUyNzVDNy4wNzkzNyAzLjM1ODU4IDcuMTEwMDkgMy40NjM4OCA3LjE3MzkgMy41NDYyQzcuMjA1OTIgMy41ODU3NSA3LjI0NTA0IDMuNjE4MjYgNy4yODkwMyAzLjY0MTg0QzcuMzMzMDIgMy42NjU0MyA3LjM4MSAzLjY3OTYzIDcuNDMwMjIgMy42ODM2M0M3LjUyMTE5IDMuNjgwMDIgNy42MDc3IDMuNjQxMjYgNy42NzMyNCAzLjU3NDc3QzcuNzM4NzggMy41MDgyOCA3Ljc3ODc2IDMuNDE4NyA3Ljc4NTU0IDMuMzIzMTZWMy4yNjY4M0M3Ljc5Mjk3IDIuOTQ0NzggNy43MDU3MiAyLjYyODE4IDcuNTM1NyAyLjM2MDMxQzcuMzY1NjkgMi4wOTI0NCA3LjEyMTIyIDEuODg2MzggNi44MzU3MSAxLjc3MDMyWiIgZmlsbD0iI0ZGMDAwMCIvPgo8L3N2Zz4K" className="inline" alt="heart icon" />
                                        &nbsp; working worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact