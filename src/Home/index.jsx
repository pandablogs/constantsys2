import React from 'react';
import './home.scss';
import heroImg from '../assets/images/hero.svg';
import img1 from '../assets/images/img1.svg';
import img2 from '../assets/images/img2.svg';
import img3 from '../assets/images/img3.svg';
import img4 from '../assets/images/img4.svg';
import img5 from '../assets/images/img5.svg';

export default function Home() {

  const card = [
    {
      "title": "Web Development",
      "image": img1,
      "description": "We can help you build SAAS/ E-commerce or Progressive Web applications (PWA).",
      "alt": "Web Development Logo"
    },
    {
      "title": "App Development",
      "image": img2,
      "description": "We can build native iOS and Android apps using React Native, which is performant and cost-effective.",
      "alt": "App Development SVG"
    },
    {
      "title": "UI/UX Designer",
      "image": img3,
      "description": "We ensure that all content within a user experience is delivered to the user at the right time, place, and format.",
      "alt": "UI/UX Designer SVG"
    },
    {
      "title": "Graphic Design",
      "image": img4,
      "description": "We create visual content to communicate messages by applying visual hierarchy and page layout techniques.",
      "alt": "Graphic Design svg"
    },
    {
      "title": "Strategic Partnerships",
      "image": img5,
      "description": "We partner with start-ups and other IT consulting companies to provide them with best software developers at affordable rates.",
      "alt": "Strategic Partnerships"
    }
  ]



  return (
    <>
      <div className="flex items-center justify-center bg-gradient-to-b pt-[30px] pb-[30px] xl:pt-[50px] xl:pb-[93px] mt-28" id='home'>
        <div className="max-w-[96rem] m-auto w-full">
          <div className="m-auto w-[90%]">
            <div className="flex flex-col-reverse items-center justify-center md:flex  md:flex-col-reverse lg:flex-row">
              <div className="mt-[24px] flex flex-1 flex-col md:mt-0">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-[8px] md:mt-[90px]">
                      <p className="relative z-[2] text-center md:text-center lg:text-left">
                        <span className="text-center text-[14px] font-[300] text-[#424242] md:text-center md:text-[20px] md:font-[400] lg:text-left">
                          Welcome to&nbsp;
                        </span>
                        <span className="text-center text-[12px] font-[300] text-primary md:text-left md:text-[20px] md:font-[400]">
                          Propelius Technologies!
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-[8px] lg:items-start">
                      <h1 className="relative z-[2] text-center text-[20px] font-[600] text-[#37474F] sm:text-[28px] md:text-center md:text-[28px] lg:text-left lg:text-[38px]">
                        Build Innovative Software  Products that Scale with <br /> us !
                        <span className="text-primary"></span>
                      </h1>
                      <h5 className="relative z-[2] w-4/5 text-center text-[15px] text-[#37474F] md:w-full md:text-[25px] lg:text-left">
                        Bring your ideas to life!&nbsp;<span className="text-primary">
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="relative z-[2] flex justify-center py-5 md:justify-center lg:justify-start">
                    <div className="min-w-[140px] rounded-[7px] bg-[#3498db] px-[24px] py-[12px] text-center md:min-w-[300px]">
                      <p className="text-[14px] font-[500] text-[#FFFFFF] md:text-[23px]">
                        <a href="#contact-us">
                          Get Your Free Quote Today!</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" absolute top-[7px] bottom-0 left-0 right-0 hidden h-[500px] w-[500px] lg:block">
                  <svg className="md:w-[220px] lg:w-[520px]" xmlns="http://www.w3.org/2000/svg" height="825" fill="none" viewBox="0 0 474 930">
                    <path stroke="#B0C5B2" strokeOpacity={"0.35"} d="M-113.591 898.812c70.286 41.983 157.204 35.405 229.073 13.151C309.77 852.346 467.736 672.874 473.448 474.22 479.86 251.99 268.436 46.619 31.38 10.053c-156.293-23.962-330.778-2.746-463.335 57.89-59.179 27.449-107.288 70.049-139.394 123.434m457.758 707.435l.251-.389m-.251.389l.25-.389h.001m-.251.389c-74.546-44.79-98.953-115.613-123.736-187.53-22.985-66.696-46.293-134.331-110.22-183.011l-223.802-336.894m458.009 707.046c70.065 41.851 156.783 35.327 228.604 13.088l.001-.001c194.123-59.566 351.954-238.9 357.66-437.358C479.329 252.205 268.157 47.05 31.352 10.522M-113.34 898.423c-71.635-43.04-96.862-110.19-120.791-179.409-.906-2.621-1.81-5.245-2.715-7.871-22.969-66.657-46.325-134.435-110.394-183.222-25.475-19.425-54.341-33.974-83.12-48.479l-4.311-2.173c-30.219-15.248-60.154-30.715-85.921-52.024l-.326.335.326-.335c-45.627-37.708-68.437-78.229-74.732-118.244-6.298-40.024 3.921-79.587 24.443-115.363M31.352 10.522l.027-.467-.027.467s0 0 0 0zm0 0C-124.835-13.424-299.213 7.78-431.677 68.374m0 0h.001l-.278-.429.276.43.001-.001zm0 0c-59.098 27.41-107.14 69.951-139.204 123.264m0 0l.002-.003-.47-.258m.468.261l-.002.004-.466-.265">
                    </path>
                  </svg>
                </div>
                <div className="-z-1 absolute top-6 bottom-0 left-0 right-0 hidden h-[500px] lg:block">
                  <svg className="md:w-[200px] lg:w-[500px]" xmlns="http://www.w3.org/2000/svg" height="700" fill="none" viewBox="0 0 343 825">
                    <path stroke="#B0C5B2" strokeOpacity={"0.35"} d="M-538.707 377.431l-.304.311.303-.311c-40.452-33.432-60.672-69.355-66.253-104.826-5.583-35.481 3.475-70.557 21.671-102.278 28.431-47.271 71.029-84.992 123.43-109.296C-342.397 7.3-187.764-11.504-49.264 9.731c209.979 32.39 397.225 214.304 391.547 411.103-5.06 175.978-145.015 335.001-317.151 387.821l-.002.001c-63.687 19.72-140.569 25.5-202.68-11.599-63.506-38.156-85.872-97.685-107.094-159.074-.804-2.326-1.607-4.655-2.41-6.985-20.368-59.109-41.087-119.234-97.921-162.512-22.597-17.231-48.202-30.136-73.723-42.999l-3.825-1.928c-26.799-13.522-53.341-27.236-76.184-46.128z">
                    </path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-[1.4] justify-center">
                <div className="relative z-[2] h-[350px] w-[90%] md:h-[500px] md:w-[95%]">
                  <img className="bg-cover h-full w-full hero-img" src={heroImg} alt="Home cover image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-[24px] md:py-[80px]">
        <div className="max-w-[96rem] m-auto w-full">
          <div className="m-auto w-[90%]">
            <div className="mb-[18px] flex justify-center pb-[23px] md:mb-[48px]">
              <div>
                <h3 className="pb-[6px] text-center text-[18px] font-[500] md:text-[35px] md:font-[600]">
                  <span className="text-[#192E35]">
                    We build immersive&nbsp;</span>
                  <span className="text-primary">
                    experiences</span>
                </h3>
                <p className="m-auto w-[90%] text-center text-[14px] text-[#2F4651] md:w-[70%] md:text-[22px]">
                  <span className="text-[#192E35]">
                    Propelius Technologies is focused on delivering quality, innovative solutions with groundbreaking technology.</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-[19px] gap-x-[3rem] md:grid-cols-2 md:gap-y-[5rem] lg:grid-cols-3">
              {card?.map(({ title, image, description, alt }, i) =>
                <div key={i} className="flex flex-col items-center gap-[8px] bg-[#ebeff9] py-[26px] md:items-start md:gap-[15px] md:bg-inherit md:py-0">
                  <div className="h-[90px] w-[90px]">
                    <img className="h-full w-full" src={image} alt={alt} />
                  </div>
                  <div>
                    <p className="text-[16px] font-[500] text-primary md:text-[18px]">
                      {title}</p>
                  </div>
                  <div className="w-[70%] md:w-[80%]">
                    <p className="text-center text-[14px] text-[#484747] md:text-left md:text-[16px]">
                      {description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
