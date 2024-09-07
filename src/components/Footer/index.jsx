import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/images/logo.png';
import './footer.scss';
import email from '../../assets/images/email.svg';
import call from '../../assets/images/call.svg';
import locations from '../../assets/images/locations.svg';

export default function Footer() {
  return (
    <div className="pb-[20px] lg:block" id='footer'>
  <div>
    <hr className="bg-primary p-[0.5px] " />
  </div>
  <div style={{ maxWidth: 1536, margin: "auto", width: "100%" }}>
    <div className="m-auto w-[90%]">
      <div className="pt-[37px] pb-[70px] xl:m-auto xl:px-0 xl:pt-[112px] xl:pb-[142px]">
        <div className="flex flex-col gap-y-[40px] gap-x-[4rem] xl:m-auto xl:flex xl:max-w-[1600px] xl:flex-row xl:justify-between">
          <div className="flex flex-col gap-y-[40px] md:flex-row md:justify-between xl:flex-col xl:justify-center">
            <div className="flex items-center gap-x-[42px] xl:flex xl:flex-col xl:gap-y-[33px]">
              <div>
                <a aria-current="page" className="" href="/">
                  <img
                    className="w-[142px] md:w-[180px] lg:w-[210px] xl:w-[259px]"
                    src={logo}
                    alt="Company logo"
                  />
                </a>
              </div>
              <div className="flex gap-x-[16px] xl:flex xl:flex-wrap xl:items-center xl:justify-start xl:gap-x-[24px]">
                <div>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="hidden xl:block">
                      <svg
                        className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[43px] xl:w-[43px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        fill="none"
                        viewBox="0 0 43 43"
                      >
                        <path
                          fill="#3498db"
                          d="M21.166 42.333c11.69 0 21.167-9.477 21.167-21.166C42.333 9.476 32.856 0 21.167 0 9.476 0 0 9.477 0 21.166c0 11.69 9.477 21.167 21.166 21.167z"
                        />
                        <path
                          fill="#F8F8F8"
                          d="M15.94 14a2 2 0 11-4-.002 2 2 0 014 .002zm.06 3.48h-4V30h4V17.48zm6.32 0h-3.98V30h3.94v-6.57c0-3.66 4.77-4 4.77 0V30H31v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                        />
                      </svg>
                    </div>
                    <div className="block xl:hidden">
                      <svg
                        className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[43px] xl:w-[43px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        fill="none"
                        viewBox="0 0 43 43"
                      >
                        <path
                          fill="#3498db"
                          d="M21.166 42.333c11.69 0 21.167-9.477 21.167-21.166C42.333 9.476 32.856 0 21.167 0 9.476 0 0 9.477 0 21.166c0 11.69 9.477 21.167 21.166 21.167z"
                        />
                        <path
                          fill="#F8F8F8"
                          d="M15.94 14a2 2 0 11-4-.002 2 2 0 014 .002zm.06 3.48h-4V30h4V17.48zm6.32 0h-3.98V30h3.94v-6.57c0-3.66 4.77-4 4.77 0V30H31v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="hidden xl:block">
                      <svg
                        className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[43px] xl:w-[43px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        fill="none"
                        viewBox="0 0 43 43"
                      >
                        <path
                          fill="#3498db"
                          d="M21.166 42.333c11.69 0 21.167-9.477 21.167-21.166C42.333 9.476 32.856 0 21.167 0 9.476 0 0 9.477 0 21.166c0 11.69 9.477 21.167 21.166 21.167z"
                        />
                        <g fill="#fff" clipPath="url(#clip0_6_1727)">
                          <path d="M24.019 18.98a3.562 3.562 0 11-5.038 5.039 3.562 3.562 0 015.038-5.038" />
                          <path d="M25.656 12h-8.312A5.35 5.35 0 0012 17.344v8.312A5.35 5.35 0 0017.344 31h8.312A5.35 5.35 0 0031 25.656v-8.312A5.35 5.35 0 0025.656 12zM21.5 26.25c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm5.344-9.5a.594.594 0 110-1.188.594.594 0 010 1.188z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_6_1727">
                            <path
                              fill="#fff"
                              d="M0 0H19V19H0z"
                              transform="translate(12 12)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="block xl:hidden">
                      <svg
                        className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[43px] xl:w-[43px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        fill="none"
                        viewBox="0 0 43 43"
                      >
                        <path
                          fill="#3498db"
                          d="M21.166 42.333c11.69 0 21.167-9.477 21.167-21.166C42.333 9.476 32.856 0 21.167 0 9.476 0 0 9.477 0 21.166c0 11.69 9.477 21.167 21.166 21.167z"
                        />
                        <g fill="#fff" clipPath="url(#clip0_6_1727)">
                          <path d="M24.019 18.98a3.562 3.562 0 11-5.038 5.039 3.562 3.562 0 015.038-5.038" />
                          <path d="M25.656 12h-8.312A5.35 5.35 0 0012 17.344v8.312A5.35 5.35 0 0017.344 31h8.312A5.35 5.35 0 0031 25.656v-8.312A5.35 5.35 0 0025.656 12zM21.5 26.25c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75zm5.344-9.5a.594.594 0 110-1.188.594.594 0 010 1.188z" />
                        </g>
                        <defs>
                          <clipPath id="clip0_6_1727">
                            <path
                              fill="#fff"
                              d="M0 0H19V19H0z"
                              transform="translate(12 12)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="hidden xl:block">
                      <svg
                        className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[43px] xl:w-[43px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        fill="none"
                        viewBox="0 0 43 43"
                      >
                        <path
                          fill="#3498db"
                          d="M21.166 42.333c11.69 0 21.167-9.477 21.167-21.166C42.333 9.476 32.856 0 21.167 0 9.476 0 0 9.477 0 21.166c0 11.69 9.477 21.167 21.166 21.167z"
                        />
                        <path
                          fill="#fff"
                          d="M28.561 15.525c-2.539 0-4.51 1.647-5.31 4.362-1.22-1.832-2.148-4.032-2.687-5.886h-2.736v7.105a2.55 2.55 0 01-2.547 2.545 2.549 2.549 0 01-2.545-2.545V14H10v7.105c0 2.911 2.371 5.298 5.282 5.298 2.913 0 5.283-2.387 5.283-5.298v-1.189c.529 1.106 1.182 2.228 1.974 3.219L20.865 31h2.797l1.213-5.705c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.45 5.439-5.445a5.441 5.441 0 00-5.439-5.434zm0 8.132c-1.102 0-2.135-.467-3.074-1.227l.228-1.074.008-.042c.207-1.143.849-3.058 2.839-3.058a2.703 2.703 0 012.703 2.7 2.706 2.706 0 01-2.704 2.701z"
                        />
                      </svg>
                    </div>
                    <div className="block xl:hidden">
                      <svg
                        className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[43px] xl:w-[43px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width={43}
                        height={43}
                        fill="none"
                        viewBox="0 0 43 43"
                      >
                        <path
                          fill="#3498db"
                          d="M21.166 42.333c11.69 0 21.167-9.477 21.167-21.166C42.333 9.476 32.856 0 21.167 0 9.476 0 0 9.477 0 21.166c0 11.69 9.477 21.167 21.166 21.167z"
                        />
                        <path
                          fill="#fff"
                          d="M28.561 15.525c-2.539 0-4.51 1.647-5.31 4.362-1.22-1.832-2.148-4.032-2.687-5.886h-2.736v7.105a2.55 2.55 0 01-2.547 2.545 2.549 2.549 0 01-2.545-2.545V14H10v7.105c0 2.911 2.371 5.298 5.282 5.298 2.913 0 5.283-2.387 5.283-5.298v-1.189c.529 1.106 1.182 2.228 1.974 3.219L20.865 31h2.797l1.213-5.705c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.45 5.439-5.445a5.441 5.441 0 00-5.439-5.434zm0 8.132c-1.102 0-2.135-.467-3.074-1.227l.228-1.074.008-.042c.207-1.143.849-3.058 2.839-3.058a2.703 2.703 0 012.703 2.7 2.706 2.706 0 01-2.704 2.701z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 md:flex-row xl:flex xl:gap-x-0 ">
            <div
              className="flex flex-col gap-y-[15px] md:flex md:flex-1 md:flex-col md:gap-y-[45px] xl:flex xl:flex-col xl:gap-y-[45px]"
              style={{ flex: "1 1 0%" }}
            >
              <div>
                <h4 className="text-sm font-medium text-[#161A27] md:text-[24px] xl:text-[24px]">
                  SUPPORT
                </h4>
              </div>
              <div className="flex gap-x-20">
                <div className="flex flex-col gap-y-4 text-[14px] font-medium text-secondary md:flex md:flex-col md:gap-y-[45px] md:text-[18px] md:font-normal xl:flex xl:flex-col xl:gap-y-[45px] xl:text-[18px] xl:font-normal">
                  <Link to="/join-us">
                    Join Us
                    <sup className="bg-[#3498db] text-[12px] ml-[6px] inline rounded-[23px] bg-tertiary py-[3px] px-[8px] text-white">
                      Hiring
                    </sup>
                  </Link>
                  <Link to="/about-us">Get to know us</Link>
                  <Link to="/portfolio">Portfolio</Link>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block md:flex md:flex-col md:gap-y-[45px] xl:block xl:flex xl:flex-col xl:gap-y-[45px]"
              style={{ flex: "1 1 0%" }}
            >
              <div>
                <h4 className="text-sm font-medium text-[#161A27] md:text-[24px] xl:text-[24px]">
                  CONNECT US
                </h4>
              </div>
              <div className="flex flex-col gap-y-[45px] text-secondary">
                <div className="flex gap-x-[16px] items-center">
                  <div>
                    <img
                      className="w-[13px] xl:w-[25px] icon"
                      src={call}
                      alt="call icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <a href="tel:+91 7778850746" target="_blank">
                      <span className='font-semibold'>+91 77788 50746 </span>
                    </a>
                    <a href="tel:+91 7046280268" target="_blank">
                      <span className='font-semibold'>+91 70462 80268</span>
                    </a>{" "}
                  </div>
                </div>
                <div className="flex gap-x-[16px] items-center">
                  <div>
                    <img
                      className="w-[13px] xl:w-[25px] icon"
                      src={email}
                      alt="mail icon"
                    />
                  </div>
                  <div>
                    <a href="mailto:hr@constantsys.com" className='font-semibold'>hr@constantsys.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block md:flex md:flex-col md:gap-y-[45px] xl:block xl:flex xl:flex-col xl:gap-y-[45px]"
              style={{ flex: "1 1 0%" }}
            >
              <div>
                <h4 className="text-sm font-medium text-[#161A27] md:text-[24px] xl:text-[24px]">
                  FIND US
                </h4>
              </div>
              <div className="flex flex-col gap-y-[45px] text-secondary">
                <div className="flex gap-x-[16px]">
                  <div>
                    <img
                      className="w-[13px] xl:w-[25px] icon"
                      src={locations}
                      alt="location icon"
                    />
                  </div>
                  <div className="w-[85%] lg:w-[80%]">
                    {" "}
                    <a href="https://maps.app.goo.gl/riknqnAUJ1ZQZupH6" className='font-semibold'>
                      410, Galleria Shopping Hub , Near Sanjeevkumar Auditorium, opp. New RTO, Pal, Adajan, Surat, Gujarat 395009
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="block flex flex-col gap-y-[27px] md:hidden xl:flex xl:hidden xl:flex-row">
              <div className="flex flex-col gap-y-[15px] text-[14px] xl:flex xl:flex-1 xl:flex-col xl:gap-y-[45px]">
                <h4 className="font-medium text-[#161A27] xl:text-[24px]">
                  CONNECT US
                </h4>
                <div className="flex flex-col gap-y-[14px] font-medium text-secondary xl:flex xl:flex-col xl:gap-y-[45px] xl:text-[18px] xl:font-normal">
                  <div className="flex items-center gap-x-[15px] xl:flex xl:gap-x-[16px]">
                    <div>
                      <img
                        className="w-[13px] xl:w-[25px] icon"
                        src={call}
                        alt="call icon"
                      />
                    </div>
                    <div className="flex flex-col">
                    {" "}
                    <a href="tel:+91 7778850746" target="_blank">
                      <span className='font-semibold'>+91 77788 50746 </span>
                    </a>
                    <a href="tel:+91 7046280268" target="_blank">
                      <span className='font-semibold'>+91 70462 80268</span>
                    </a>{" "}
                  </div>
                  </div>
                  <div className="flex items-center gap-x-[15px] xl:flex xl:gap-x-[16px]">
                    <div>
                      <img
                        className="w-[13px] xl:w-[25px] icon"
                        src={email}
                        alt="mail icon"
                      />
                    </div>
                    <div>
                      <a href="mailto:hr@constantsys.com">
                        hr@constantsys.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-[15px] text-[14px] font-medium xl:flex xl:flex-1 xl:flex-col xl:gap-y-[45px]">
                <h4 className="text-[#161A27] xl:text-[24px] xl:font-medium">
                  FIND US
                </h4>
                <div className="text-secondary xl:flex xl:flex-col xl:gap-y-[45px]">
                  <div className="flex items-start gap-x-[15px] xl:flex xl:gap-x-[16px] xl:text-[18px] xl:font-normal">
                    <div className="x:w-[30%] w-[6%]">
                      <img
                        className="w-[13px] xl:w-[25px] icon"
                        src={locations}
                        alt="location icon"
                      />
                    </div>
                    <div className=" w-[80%] xl:w-[80%]">
                      <p>
                        <a
                          href="https://maps.app.goo.gl/riknqnAUJ1ZQZupH6"
                          target="_blank"
                        >
                          410, Galleria Shopping Hub , Near Sanjeevkumar Auditorium, opp. New RTO, Pal, Adajan, Surat, Gujarat 395009
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:p-[20px] xl:p-[22px]">
        <p className="text-[14px] text-[#7F7F7F] md:text-[16px] xl:text-[18px]">
          ©2024 by Constantsys Technologies.
        </p>
      </div>
    </div>
  </div>
</div>

  )
}
