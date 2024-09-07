import React, { useEffect } from 'react';
import './about.scss';
import aboutOne from '../assets/images/about1.svg';
import aboutTwo from '../assets/images/about2.svg';
import aboutThree from '../assets/images/about3.svg';
import aboutFour from '../assets/images/about4.svg';
import aboutFive from '../assets/images/about5.svg';

const About = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    },[]);
    return (
        <main className='mt-20' id='about'>
            <div>
                <div className="-z-1 absolute left-0 hidden lg:block">
                    <svg className="w-[300px] xl:w-[474px]" xmlns="http://www.w3.org/2000/svg" height="925" fill="none" viewBox="0 0 474 925">
                        <path fill="#B0C5B2" fillOpacity="0.35" fillRule="evenodd" d="M0 924.469c39.615.872 79.44-6.345 115.482-17.505C309.77 847.346 467.736 667.875 473.448 469.22 479.86 246.99 268.436 41.619 31.38 5.053A809.563 809.563 0 000 .873v1.006a808.478 808.478 0 0131.227 4.162C149.53 24.29 261.455 84.665 342.999 168.211c81.545 83.547 132.646 190.197 129.449 300.98-5.697 198.154-163.308 377.303-357.26 436.816l-.002.001C79.198 917.152 39.478 924.342 0 923.469v1zm0-98.435a377.385 377.385 0 0025.644-6.97c172.637-52.975 313.081-212.46 318.161-389.134 2.853-98.872-42.752-193.925-115.336-268.292C167.273 98.94 86.857 50.898 0 27.628v2.07c86.298 23.226 166.204 71.009 227.038 133.337 72.301 74.076 117.602 168.629 114.768 266.838-5.051 175.674-144.786 334.512-316.75 387.279l-.003.001A375.494 375.494 0 010 823.98v2.054z" clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <div className="-z-1 absolute right-0 hidden sm:hidden lg:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="447" height="859" fill="none" viewBox="0 0 447 859">
                        <path fill="#B0C5B2" fillOpacity="0.35" fillRule="evenodd" d="M447 .611c-60.498 4.221-120.172 14.48-175.846 30.47a748.63 748.63 0 00-16.77 5.028 693.876 693.876 0 00-17.227 4.568c-31.385 8.757-61.388 19.553-89.295 32.319C95.38 97.338 52.715 135.117 24.242 182.46c-25.382 44.247-33.051 95.069-8.005 144.48a155.781 155.781 0 002.786 5.245c.65 1.856 1.34 3.712 2.069 5.566 11.492 29.261 32.681 58.3 65.99 85.828 27.05 22.37 58.675 38.309 90.332 54.265 28.792 14.511 57.611 29.036 83.039 48.426a240.852 240.852 0 0113.795 11.335c.659 1.03 1.311 2.064 1.954 3.102 19.886 32.087 32.125 67.603 44.263 102.824 18.121 52.585 36.016 104.512 78.795 143.382.625.568 1.256 1.134 1.892 1.696.353.755.709 1.508 1.067 2.26 11.612 24.385 25.739 47.359 44.781 67.739v-1.468c-18.064-19.525-31.662-41.423-42.903-64.671 7.722 6.496 16.209 12.592 25.586 18.226l.003.002A180.084 180.084 0 00447 819.799v-2.203a178.249 178.249 0 01-16.289-8.615c-10.683-6.419-20.199-13.443-28.74-20.981-10.678-22.835-19.244-46.891-27.654-71.22a6601.1 6601.1 0 01-2.723-7.894c-21.218-61.574-42.805-124.221-96.581-171.938-13.233-20.653-29.784-39.833-51.689-56.513-22.627-17.253-48.26-30.173-73.773-43.031l-3.835-1.933c-26.803-13.525-53.307-27.221-76.112-46.081v-.001c-22.526-18.615-38.753-37.991-49.665-57.613a153.513 153.513 0 01-6.793-26.917c-6.273-39.868 3.9-79.293 24.368-114.975 31.997-53.202 79.947-95.666 138.95-123.032 24.731-11.313 50.925-21.252 78.191-29.78C315.828 21.688 381.632 13.871 447 14.11v-2c-53.64-.195-107.577 5.02-159.03 15.38C338.76 14.119 392.544 5.419 447 1.615V.61zM148.281 73.904c22.665-10.368 46.716-19.434 71.769-27.162-15.246 5.631-30.078 11.731-44.421 18.292l-.004.002c-59.352 27.528-107.617 70.261-139.83 123.826l-.006.008-.005.009c-20.642 35.983-30.973 75.87-24.614 116.29.84 5.342 1.972 10.69 3.409 16.038-5.553-12.098-9.167-24.254-11.07-36.35-5.558-35.325 3.455-70.262 21.596-101.89 28.364-47.159 70.87-84.803 123.176-109.063zM87.719 422.809c-31.135-25.731-51.608-52.753-63.455-80.004 10.704 16.405 25.212 32.545 44.065 48.126 23.003 19.023 49.702 32.811 76.486 46.325l3.785 1.909c25.556 12.88 51.037 25.723 73.512 42.861h.001c19.613 14.936 34.897 31.892 47.347 50.145a241.92 241.92 0 00-8.4-6.695c-25.505-19.448-54.4-34.011-83.171-48.512l-2.941-1.482-1.38-.696c-30.222-15.25-60.121-30.7-85.849-51.977zm233.667 220.326c-11.743-34.078-23.617-68.539-42.486-99.923 49.581 46.718 70.302 106.841 90.852 166.468l.039.115c.878 2.548 1.756 5.094 2.636 7.639 7.887 22.814 15.931 45.465 25.76 67.135-39.458-36.767-57.279-84.947-74.383-134.425-.801-2.315-1.599-4.633-2.399-6.953l-.019-.056z" clipRule="evenodd">
                        </path>
                    </svg>
                </div>
                <div className="bg-gradient-to-b from-hero-gradient-start to-hero-gradient-end xl:px-0">
                    <div className='max-w-[96rem] m-auto w-full'>
                        <div className="m-auto w-[90%]">
                            <div className="relative flex flex-col items-center justify-center pt-[40px] ">
                                <div className="flex flex-col items-center gap-y-8">
                                    <div className="xl:w-3/5">
                                        <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[22px] lg:gap-y-[25px] xl:flex xl:flex-col xl:gap-y-[32px] 2xl:flex 2xl:flex-col 2xl:gap-y-[32px]">
                                            <div>
                                                <h2 className="text-[18px] font-medium text-[#111111] md:text-[22px] text-center md:font-semibold lg:text-[26px] lg:font-semibold lg:text-black xl:text-[35px] xl:font-semibold ">
                                                    About&nbsp;
                                                    <span className="text-primary">Us</span>
                                                </h2>
                                            </div>
                                            <div className="flex w-9/12 flex-col text-center text-[14px] md:w-4/5 lg:w-3/5 lg:text-[17px] xl:w-3/5 xl:text-[25px]">
                                                <p className="leading-5 tracking-tight text-[#111111] md:leading-5 lg:leading-7 xl:leading-9 xl:tracking-wide">
                                                    We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow.</p>
                                                <p className="text-primary">
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <img className="object-fill object-center" src="https://propelius-tech-files.s3.amazonaws.com/about_us_cover_5135f268dc.png" alt="About Us Cover image" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center justify-center md:px-[50px]">
                    <div className="-z-1 absolute right-0 hidden sm:hidden md:block lg:block">
                        <svg className="w-[200px] xl:w-[341px]" xmlns="http://www.w3.org/2000/svg" height="1500" fill="none" viewBox="0 0 341 1500">
                            <path stroke="#B0C5B2" strokeOpacity="0.6" d="M340.001.5C-7.999 210-78.499 704 85.486 1121.71 217.09 1390 340 1499.5 340 1499.5">
                            </path>
                        </svg>
                    </div>
                    {/* <div className="relative z-20 flex justify-center -mt-8">
                        <div className='max-w-[96rem] m-auto w-full'>
                            <div className="m-auto w-[90%]">
                                <div className="m-auto md:w-[80%]">
                                    <div className="m-auto flex w-[85%] flex-col gap-[24px] rounded-[7px] py-[40px] lg:hidden bg-[linear-gradient(rgb(245,253,246)_54.25%,rgb(255,255,255)_100%)]">
                                        <div className="flex flex-col items-center gap-y-4">
                                            <div className="flex flex-col items-center text-lg font-medium">
                                                <h2 className="text-black-gray">
                                                    About the <span className="text-primary">
                                                        CEO</span>
                                                </h2>
                                                <p className="text-primary underline">
                                                    <a href="#">
                                                        Yash Tamakuwala</a>
                                                </p>
                                            </div>
                                            <img className="w-1/4 rounded-lg object-cover object-center" src="https://propelius-tech-files.s3.amazonaws.com/IMG_0851_JPG_ac4e999468.webp" alt="CEO Profile Image" />
                                        </div>
                                        <div className="flex flex-col gap-y-4 px-[18px] text-[14px] text-black-400">
                                            <p className="text-center">
                                                Yash is a Software Engineer and Technical lead with Bachelor's and Master's in Computer Engineering, He is a BITSian and Santa Clara University alumni.</p>
                                            <p className="text-center">
                                                He has worked with Multiple Companies in Silicon Valley, USA as a Full Stack Engineer architecting and developing Web and Mobile Applications in the space of SAAS and Fintech</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-auto hidden w-[80%] gap-[20px] rounded-[13px] py-[80px] px-[70px] lg:flex lg:px-[50px] lg:pb-[167px] xl:px-[70px] bg-[linear-gradient(rgb(245,253,246)_54.25%,rgb(255,255,255)_100%)]">
                                    <img className="rounded-xl object-cover object-center lg:h-4/5 lg:w-2/4 xl:w-full h-[640px]" src="https://propelius-tech-files.s3.amazonaws.com/IMG_0851_JPG_ac4e999468.webp" alt="CEO Profile Image" />
                                    <div className="lg:flex lg:flex-col lg:items-start lg:gap-y-12">
                                        <div className="lg:flex lg:flex-col lg:gap-y-10 xl:gap-y-12">
                                            <h2 className="lg:text-[26px] lg:font-semibold lg:text-black xl:text-4xl">
                                                About the&nbsp;<span className="text-primary">
                                                    CEO</span>
                                            </h2>
                                            <p className="underline-offset-6 underline lg:text-[20px] lg:font-medium lg:text-primary xl:text-3xl">
                                                <a>
                                                    Yash Tamakuwala</a>
                                            </p>
                                        </div>
                                        <div className="text-black-400 lg:flex lg:flex-col lg:gap-y-7 lg:text-[18px] xl:text-[21px]">
                                            <p>
                                                Yash is a Software Engineer and Technical lead with Bachelor's and Master's in Computer Engineering, He is a BITSian and Santa Clara University alumni.</p>
                                            <p>
                                                He has worked with Multiple Companies in Silicon Valley, USA as a Full Stack Engineer architecting and developing Web and Mobile Applications in the space of SAAS and Fintech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className='max-w-[96rem] mt-10 m-auto w-full'>
                        <div className="m-auto w-[90%]">
                            <div className="pt-[60px] pb-16 lg:pb-48 lg:pt-0">
                                <div className="pb-10">
                                    <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[22px] lg:gap-y-[25px] xl:flex xl:flex-col xl:gap-y-[32px] 2xl:flex 2xl:flex-col 2xl:gap-y-[32px]">
                                        <div>
                                            <h2 className="text-[18px] font-medium text-[#111111] md:text-[22px] undefined md:font-semibold lg:text-[26px] lg:font-semibold lg:text-black xl:text-[35px] xl:font-semibold ">
                                                Our&nbsp;<span className="text-primary">
                                                    Values</span>
                                            </h2>
                                        </div>
                                        <div className="flex w-9/12 flex-col undefined text-[14px] md:w-4/5 lg:w-3/5 lg:text-[17px] xl:undefined xl:text-[25px]">
                                            <p className="leading-5 tracking-tight text-[undefined] text-[#111111] md:leading-5 lg:leading-7 xl:leading-9 xl:tracking-wide">
                                            </p>
                                            <p className="text-primary">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col items-end gap-y-14 pb-8 lg:gap-y-12">
                                        <div className="flex gap-x-5 lg:gap-x-[73px]">
                                            <div className="flex w-1/5 gap-x-3.5 lg:w-1/5 lg:gap-x-11 xl:w-44">
                                                <div className="border-2 border-primary bg-primary lg:border-[5px]">
                                                </div>
                                                <div className="lg:flex">
                                                    <img className="img-blue md:w-3/5 lg:w-full xl:w-full" src={aboutOne} alt="We are commited" />
                                                </div>
                                            </div>
                                            <div className="flex  w-4/5 flex-col gap-y-1.5 lg:w-full">
                                                <div>
                                                    <h3 className=" text-[17px] text-primary lg:text-[23px]  lg:font-medium">
                                                        We are committed</h3>
                                                </div>
                                                <div>
                                                    <p className="text-[14px] font-light text-gray-500 lg:text-[18px] xl:text-[19px]">
                                                        In a technological world, we still believe in the importance of the personal touch. We put our customers at the center of our ecosystem and strive to provide the best solution for our customers to make their life easier and more efficient.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[90%] border border-sky-100 bg-sky-200">
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-y-14 pb-8 lg:gap-y-12">
                                        <div className="flex gap-x-5 lg:gap-x-[73px]">
                                            <div className="flex w-1/5 gap-x-3.5 lg:w-1/5 lg:gap-x-11 xl:w-44">
                                                <div className="border-2 border-primary bg-primary lg:border-[5px]">
                                                </div>
                                                <div className="lg:flex">
                                                    <img className="img-blue md:w-3/5 lg:w-full xl:w-full" src={aboutTwo} alt="We are Responsible" />
                                                </div>
                                            </div>
                                            <div className="flex  w-4/5 flex-col gap-y-1.5 lg:w-full">
                                                <div>
                                                    <h3 className=" text-[17px] text-primary lg:text-[23px]  lg:font-medium">
                                                        We are Responsible</h3>
                                                </div>
                                                <div>
                                                    <p className="text-[14px] font-light text-gray-500 lg:text-[18px] xl:text-[19px]">
                                                        We communicate quickly with respect and honesty. Time is your most valuable investment. For us, quick and prompt communication with respect and honesty is crucial.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[90%] border border-sky-100 bg-sky-200">
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-y-14 pb-8 lg:gap-y-12">
                                        <div className="flex gap-x-5 lg:gap-x-[73px]">
                                            <div className="flex w-1/5 gap-x-3.5 lg:w-1/5 lg:gap-x-11 xl:w-44">
                                                <div className="border-2 border-primary bg-primary lg:border-[5px]">
                                                </div>
                                                <div className="lg:flex">
                                                    <img className="img-blue md:w-3/5 lg:w-full xl:w-full" src={aboutThree} alt="We aim for progress" />
                                                </div>
                                            </div>
                                            <div className="flex  w-4/5 flex-col gap-y-1.5 lg:w-full">
                                                <div>
                                                    <h3 className=" text-[17px] text-primary lg:text-[23px]  lg:font-medium">
                                                        We aim for progress</h3>
                                                </div>
                                                <div>
                                                    <p className="text-[14px] font-light text-gray-500 lg:text-[18px] xl:text-[19px]">
                                                        We always Aim for progress so we work together to co-create solutions and share best practices to drive positive impact, quickly, efficiently, and to scale.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[90%] border border-sky-100 bg-sky-200">
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-y-14 pb-8 lg:gap-y-12">
                                        <div className="flex gap-x-5 lg:gap-x-[73px]">
                                            <div className="flex w-1/5 gap-x-3.5 lg:w-1/5 lg:gap-x-11 xl:w-44">
                                                <div className="border-2 border-primary bg-primary lg:border-[5px]">
                                                </div>
                                                <div className="lg:flex">
                                                    <img className="img-blue md:w-3/5 lg:w-full xl:w-full" src={aboutFour} alt="We adapt New Technologies" />
                                                </div>
                                            </div>
                                            <div className="flex  w-4/5 flex-col gap-y-1.5 lg:w-full">
                                                <div>
                                                    <h3 className=" text-[17px] text-primary lg:text-[23px]  lg:font-medium">
                                                        We adapt New Technologies</h3>
                                                </div>
                                                <div>
                                                    <p className="text-[14px] font-light text-gray-500 lg:text-[18px] xl:text-[19px]">
                                                        We believe change is the most important word in the dictionary. For us, change means the ability and opportunity to learn something new. In the IT workspace, change is inevitable. We look forward to embracing it and accepting new challenges.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[90%] border border-sky-100 bg-sky-200">
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-y-14 pb-8 lg:gap-y-12">
                                        <div className="flex gap-x-5 lg:gap-x-[73px]">
                                            <div className="flex w-1/5 gap-x-3.5 lg:w-1/5 lg:gap-x-11 xl:w-44">
                                                <div className="border-2 border-primary bg-primary lg:border-[5px]">
                                                </div>
                                                <div className="lg:flex">
                                                    <img className="img-blue md:w-3/5 lg:w-full xl:w-full" src={aboutFive} alt="We seek innovation" />
                                                </div>
                                            </div>
                                            <div className="flex  w-4/5 flex-col gap-y-1.5 lg:w-full">
                                                <div>
                                                    <h3 className=" text-[17px] text-primary lg:text-[23px]  lg:font-medium">
                                                        We seek innovation</h3>
                                                </div>
                                                <div>
                                                    <p className="text-[14px] font-light text-gray-500 lg:text-[18px] xl:text-[19px]">
                                                        We consistently innovate using technology in new ways to create a more efficient organization and improve alignment between technology initiatives and business goals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default About;