import React, { useEffect } from "react";
import "./careears.scss";
import hero from "../assets/images/join-us-hero.svg";

export default function Careears() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('forms');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="careears">
      <div
        className="flex items-center justify-center bg-gradient-to-b  to-hero-gradient-end pt-[30px] pb-[30px] xl:pt-[50px] xl:pb-[93px] from-hero-gradient-start mt-28"
        id="hero-section"
      >
        <div style={{ maxWidth: 1536, margin: "auto", width: "100%" }}>
          <div className="m-auto w-[90%]">
            <div className="flex flex-col-reverse items-center justify-center md:flex  md:flex-col-reverse lg:flex-row">
              <div className="mt-[24px] flex flex-1 flex-col md:mt-0">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col items-center gap-[8px] lg:items-start">
                      <h1 className="relative z-[2] text-center text-[20px] font-[600] text-[#37474F] sm:text-[28px] md:text-center md:text-[28px] lg:text-left lg:text-[38px]">
                        Join our movement to revolutionise the future of work
                        <br />
                        <span className="text-primary" />
                      </h1>
                      <h5 className="relative z-[2] w-4/5 text-center text-[15px] text-[#37474F] md:w-full md:text-[25px] lg:text-left">
                        Find a role that is right for you.&nbsp;
                        <span className="text-primary" />
                      </h5>
                    </div>
                  </div>
                  <div className="relative z-[2] flex justify-center py-5 md:justify-center lg:justify-start">
                    <div className="min-w-[140px] rounded-[7px] bg-[#3498db] px-[24px] py-[12px] text-center md:min-w-[300px] cursor-pointer">
                      <p className="text-[14px] font-[500] text-[#FFFFFF] md:text-[23px]">
                        <a type="button" onClick={() => scrollToForm()}>Join Us</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1.4] justify-center">
                <div className="relative z-[2] h-[350px] w-[90%] md:h-[500px] md:w-[95%]">
                  <img
                    className="bg-cover hero-img"
                    src={hero}
                    alt="heroPosterImage"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute -top-[92px] bottom-0 left-0 right-0 hidden h-[500px] w-[500px] lg:block">
          <svg
            className="md:w-[220px] lg:w-[520px]"
            xmlns="http://www.w3.org/2000/svg"
            height="825"
            fill="none"
            viewBox="0 0 474 930"
          >
            <path
              stroke="#B0C5B2"
              strokeOpacity={"0.35"}
              d="M-113.591 898.812c70.286 41.983 157.204 35.405 229.073 13.151C309.77 852.346 467.736 672.874 473.448 474.22 479.86 251.99 268.436 46.619 31.38 10.053c-156.293-23.962-330.778-2.746-463.335 57.89-59.179 27.449-107.288 70.049-139.394 123.434m457.758 707.435l.251-.389m-.251.389l.25-.389h.001m-.251.389c-74.546-44.79-98.953-115.613-123.736-187.53-22.985-66.696-46.293-134.331-110.22-183.011l-223.802-336.894m458.009 707.046c70.065 41.851 156.783 35.327 228.604 13.088l.001-.001c194.123-59.566 351.954-238.9 357.66-437.358C479.329 252.205 268.157 47.05 31.352 10.522M-113.34 898.423c-71.635-43.04-96.862-110.19-120.791-179.409-.906-2.621-1.81-5.245-2.715-7.871-22.969-66.657-46.325-134.435-110.394-183.222-25.475-19.425-54.341-33.974-83.12-48.479l-4.311-2.173c-30.219-15.248-60.154-30.715-85.921-52.024l-.326.335.326-.335c-45.627-37.708-68.437-78.229-74.732-118.244-6.298-40.024 3.921-79.587 24.443-115.363M31.352 10.522l.027-.467-.027.467s0 0 0 0zm0 0C-124.835-13.424-299.213 7.78-431.677 68.374m0 0h.001l-.278-.429.276.43.001-.001zm0 0c-59.098 27.41-107.14 69.951-139.204 123.264m0 0l.002-.003-.47-.258m.468.261l-.002.004-.466-.265"
            ></path>
          </svg>
        </div>

        <div className="-z-1 absolute -top-[75px] bottom-0 left-0 right-0 hidden h-[500px] lg:block">
          <svg
            className="md:w-[200px] lg:w-[500px]"
            xmlns="http://www.w3.org/2000/svg"
            height="700"
            fill="none"
            viewBox="0 0 343 825"
          >
            <path
              stroke="#B0C5B2"
              strokeOpacity={"0.35"}
              d="M-538.707 377.431l-.304.311.303-.311c-40.452-33.432-60.672-69.355-66.253-104.826-5.583-35.481 3.475-70.557 21.671-102.278 28.431-47.271 71.029-84.992 123.43-109.296C-342.397 7.3-187.764-11.504-49.264 9.731c209.979 32.39 397.225 214.304 391.547 411.103-5.06 175.978-145.015 335.001-317.151 387.821l-.002.001c-63.687 19.72-140.569 25.5-202.68-11.599-63.506-38.156-85.872-97.685-107.094-159.074-.804-2.326-1.607-4.655-2.41-6.985-20.368-59.109-41.087-119.234-97.921-162.512-22.597-17.231-48.202-30.136-73.723-42.999l-3.825-1.928c-26.799-13.522-53.341-27.236-76.184-46.128z"
            ></path>
          </svg>
        </div>
      </div>

      <div id="forms">
        <div style={{ maxWidth: 1536, margin: "auto", width: "100%" }}>
          <div className="m-auto w-[90%]">
            <div className="pb-[80px] pt-[30px] lg:pt-[80px] lg:pb-[100px]">
              <div>
                <div className="">
                  <p className="text-[32px] font-bold text-black-400 text-[#3498db] lg:text-[52px]">
                    Join a community,
                  </p>
                  <p className="text-[32px] font-bold text-primary lg:text-[52px]">
                    not a company
                  </p>
                </div>
                <div>
                  <h5 className="text-[14px] text-black-400 md:text-[16px] lg:text-[18px]">
                    To apply, please take the time to fill out the information
                    below.
                  </h5>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-28 items-center relative overflow-hidden mt-14">
                <div>
                  <form>
                    <div className="space-y-4 mt-8">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        className="px-2 py-5 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                      />
                      <div className="grid grid-cols-2 gap-6">
                        <input
                          type="email"
                          placeholder="Email *"
                          className="px-2 py-5 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Phone *"
                          className="px-2 py-5 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                        />
                      </div>
                      <select
                        placeholder="Job role *"
                        className="px-2 py-5 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                      >
                        <option value="">Select a job role</option>
                        <option value="">ABC</option>
                        <option value="">ABC</option>

                      </select>
                      <input
                        type="text"
                        placeholder="Experience *"
                        className="px-2 py-5 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                      />

                        <input
                        type="url"
                        placeholder="LinkedIn Profile Link"
                        className="px-2 py-5 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                      />
                    </div>
                    <button
                      type="button"
                      className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 transition-all py-5 bg-[#3498db] hover:bg-[#1e6492] text-white"
                    >
                        
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
