import React, { useEffect } from "react";
import "./portfolio.scss";
import hero from "../assets/images/hero.svg";

export default function PortFolio() {

  useEffect(()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
},[])

  let projects = [
    {
      name:'Quicklending'
    },
    {
      name:'Glozic'
    },
    {
      name:'Etach'
    },
    {
      name:'Prestine AI'
    }
  ]
  return (
    <>
      <div className="-z-1 absolute left-0 hidden lg:top-[-89px] lg:block xl:top-[85px]">
        <svg
          className="w-[300px] xl:w-[474px]"
          xmlns="http://www.w3.org/2000/svg"
          height="925"
          fill="none"
          viewBox="0 0 474 925"
        >
          <path
            fill="#B0C5B2"
            fillOpacity="0.35"
            fillRule="evenodd"
            d="M0 924.469c39.615.872 79.44-6.345 115.482-17.505C309.77 847.346 467.736 667.875 473.448 469.22 479.86 246.99 268.436 41.619 31.38 5.053A809.563 809.563 0 000 .873v1.006a808.478 808.478 0 0131.227 4.162C149.53 24.29 261.455 84.665 342.999 168.211c81.545 83.547 132.646 190.197 129.449 300.98-5.697 198.154-163.308 377.303-357.26 436.816l-.002.001C79.198 917.152 39.478 924.342 0 923.469v1zm0-98.435a377.385 377.385 0 0025.644-6.97c172.637-52.975 313.081-212.46 318.161-389.134 2.853-98.872-42.752-193.925-115.336-268.292C167.273 98.94 86.857 50.898 0 27.628v2.07c86.298 23.226 166.204 71.009 227.038 133.337 72.301 74.076 117.602 168.629 114.768 266.838-5.051 175.674-144.786 334.512-316.75 387.279l-.003.001A375.494 375.494 0 010 823.98v2.054z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <div
        className="flex mt-28 items-center justify-center bg-gradient-to-b  to-hero-gradient-end pt-[30px] pb-[30px] xl:pt-[50px] xl:pb-[93px] from-hero-gradient-start"
        id="portfolio-section"
      >
        <div style={{ maxWidth: 1536, margin: "auto", width: "100%" }}>
          <div className="m-auto w-[90%]">
            <div className="flex flex-col-reverse items-center justify-center md:flex  md:flex-col-reverse lg:flex-row">
              <div className="mt-[24px] flex flex-1 flex-col md:mt-0">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col items-center gap-[8px] lg:items-start">
                      <h1 className="relative z-[2] text-center text-[20px] font-[600] text-[#37474F] sm:text-[28px] md:text-center md:text-[28px] lg:text-left lg:text-[38px]">
                        Creating World Class
                        <br />
                        <span className="text-primary text-[#3498db]">
                          Digital Solutions
                        </span>
                      </h1>
                      <h5 className="relative z-[2] w-4/5 text-center text-[15px] text-[#37474F] md:w-full md:text-[25px] lg:text-left">
                        Successful innovations for Ambitious Brands&nbsp;
                        <span className="text-primary" />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-[1.4] justify-center">
                <div className="relative z-[2] h-[350px] w-[90%] md:h-[500px] md:w-[95%]">
                  <img
                    className="bg-cover hero-img"
                    src={hero}
                    alt="Portfolio Cover Image"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <span className="flex items-center justify-center mt-16 mb-16">
              <span className="h-[1px] w-[20%] bg-[#3498db] md:w-full" />
              <span className="w-fit text-center text-[14px] text-[#272D4E] mx-4 sm:whitespace-nowrap md:text-[18px]">
                "Our ultimate experiences with&nbsp;
                <span className="text-[#3498db] sm:whitespace-nowrap md:text-[18px]">
                  story, emotion, and Purpose"
                </span>
              </span>
              <span className="h-[1px] w-[20%] bg-[#3498db] md:w-full" />
            </span>

            {/* Tabs */}
            {/* <div className="relative mt-[40px] mb-[40px] flex flex-wrap justify-center gap-y-[8px] gap-x-[8px] p-[10px] xl:mt-0 xl:mb-0 xl:flex xl:gap-x-[21px] xl:pt-[102px] xl:pb-0">
  <div className="flex h-[25px] cursor-pointer items-center justify-center rounded-3xl bg-inactiveButton px-3 md:h-[29px] md:w-[90px] xl:h-[47px] xl:w-[149px]">
    <p className="text-[14px] text-tertiary lg:text-[16px] xl:text-[25px]">
      All
    </p>
  </div>
  <div className="flex h-[25px] cursor-pointer items-center justify-center rounded-3xl bg-inactiveButton px-3 md:h-[29px] md:w-[90px] xl:h-[47px] xl:w-[149px]">
    <p className="text-[14px] text-tertiary lg:text-[16px] xl:text-[25px]">
      Android
    </p>
  </div>
  <div className="flex h-[25px] cursor-pointer items-center justify-center rounded-3xl bg-inactiveButton px-3 md:h-[29px] md:w-[90px] xl:h-[47px] xl:w-[149px]">
    <p className="text-[14px] text-tertiary lg:text-[16px] xl:text-[25px]">
      App
    </p>
  </div>
  <div className="flex h-[25px] cursor-pointer items-center justify-center rounded-3xl bg-inactiveButton px-3 md:h-[29px] md:w-[90px] xl:h-[47px] xl:w-[149px]">
    <p className="text-[14px] text-tertiary lg:text-[16px] xl:text-[25px]">
      Web
    </p>
  </div>
  <div className="flex h-[25px] cursor-pointer items-center justify-center rounded-3xl bg-inactiveButton px-3 md:h-[29px] md:w-[90px] xl:h-[47px] xl:w-[149px]">
    <p className="text-[14px] text-tertiary lg:text-[16px] xl:text-[25px]">
      React
    </p>
  </div>
  <div className="flex h-[25px] cursor-pointer items-center justify-center rounded-3xl bg-tertiary px-3 px-2 md:h-[29px] md:w-[90px] xl:h-[47px] xl:w-[149px]">
    <p className="text-[14px] text-white lg:text-[16px] xl:text-[25px]">iOS</p>
  </div>
</div> */}

            {/* Cards */}
            {projects.map((x) => (
              <section id="project1" className="py-[25px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" key={x.name}>
              <div className="w-full mx-[4px] my-auto py-8 lg:pt-16 lg:mr-[60px] lg:pl-[0px] lg:pr-[60px]">
                <p className="text-[14px] leading-[19.5px] text-black-400 lg:text-[16px] lg:leading-[24px]" />
                <p className="relative text-[20px] font-medium text-[#3498db] lg:text-[35px] lg:leading-[52.5px]">
                  {x.name}&nbsp;&nbsp;
                  <span className=" -bottom-0.5 text-[14px] font-light text-gray-200 lg:text-[18px]" />
                </p>
                <p className="pt-3 text-sm text-description-darker md:w-4/5 lg:w-full lg:text-[20px] lg:font-medium lg:font-normal lg:leading-[33px]">
                  A web application that allows users to rent electronic items
                  online and can subscribe for items on monthly bases. They can
                  search for thousands of products in the blink of their eyes. The
                  platform has secure payment methods and 99.99% genuine users.
                </p>
                <div className="mb-11 flex flex-col-reverse lg:flex-row lg:gap-x-3 lg:p-2">
                  <div className="flex flex-col lg:basis-3/5 lg:p-2">
                    <span className="mt-4 text-[14px] font-medium leading-[27px] text-black-400 lg:text-[18px]">
                      Tech used
                    </span>
                    <div className="flex w-full flex-wrap gap-[20px] lg:mt-6 lg:w-full lg:gap-[25px]">
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/next_icon_0cf61b4b5e.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/Group_20693postgre_SQL_1af66de86c.png"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/Redis_Logo_d2dc4889c1.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/Expressjs_5b61baf4c6.png"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/aws_icon_d5e0efdc68.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/typescript_icon_a8c5011b0d.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/react_0970ca9949.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/Firebase_Logo_3d4225bceb.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="w-[auto] lg:h-[50px]">
                        <img
                          className="h-[40px] w-[40px] lg:h-[40px] lg:w-[40px] xl:h-[50px] xl:w-[60px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/nodejs_logo_2275226c2a.webp"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex gap-x-[12px] pt-[14px] lg:flex lg:basis-2/5 lg:flex-col lg:p-2">
                    <span className="text-[14px] font-medium leading-[27px] text-black-400 lg:mt-4 lg:text-[18px]">
                      Platform
                    </span>
                    <div className="flex flex-wrap items-center gap-[20px] lg:mt-6">
                      <div className="lg:h-[50px] lg:w-[auto]">
                        <img
                          className="h-[25px] w-[25px] lg:h-[40px] lg:w-[40px] xl:h-[45px] xl:w-[45px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/web_1_b679e941f8.svg"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="lg:h-[50px] lg:w-[auto]">
                        <img
                          className="h-[25px] w-[25px] lg:h-[40px] lg:w-[40px] xl:h-[45px] xl:w-[45px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/Group_20702_c3ef227c00.png"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                      <div className="lg:h-[50px] lg:w-[auto]">
                        <img
                          className="h-[25px] w-[25px] lg:h-[40px] lg:w-[40px] xl:h-[45px] xl:w-[45px]"
                          src="https://propelius-tech-files.s3.amazonaws.com/Vector_2_a15758abcd.png"
                          alt="techdata"
                          style={{ display: "block", objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="mx-[4px] my-auto" style={{width:'100%'}}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Law Pocket" className="rounded-[20px] w-full" style={{display: 'block', objectFit: 'cover', width: '100%', margin: '0px auto'}} />
              </div>
            </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
