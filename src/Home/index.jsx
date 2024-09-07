import React, { useEffect } from "react";
import "./home.scss";
import heroImg from "../assets/images/hero.svg";
import img1 from "../assets/images/img1.svg";
import img2 from "../assets/images/img2.svg";
import img3 from "../assets/images/img3.svg";
import img4 from "../assets/images/img4.svg";
import img5 from "../assets/images/img5.svg";
import angular from "../assets/images/angular.svg";
import aws from "../assets/images/aws_icon.svg";
import express from "../assets/images/Expressjs.svg";
import Dgo from "../assets/images/Digital_Ocean_logo_.svg";
import redis from "../assets/images/Redis_Logo.svg";
import docker from "../assets/images/docker_icon.svg";
import firebase from "../assets/images/Firebase_Logo.svg";
import nextjs from "../assets/images/next_icon.svg";
import python from "../assets/images/python.svg";
import nodejs from "../assets/images/nodejs_logo.svg";
import psql from "../assets/images/postgre_SQL.svg";
import react from "../assets/images/react.svg";
import mongo from "../assets/images/mongodb.svg";
import pairbros from '../assets/images/pair_programming_bro.svg';
import code from "../assets/images/code.svg";
import agile from "../assets/images/agility.svg";
import managgement from "../assets/images/management.svg";
import humanFriendly from "../assets/images/human-readable.svg";
import team from "../assets/images/team.svg";
import progress from "../assets/images/progress.svg";
import planImg from '../assets/images/plan.svg';
import rightProcess from '../assets/images/right-arrow.svg';
import test from '../assets/images/test.svg';
import develop from '../assets/images/develop.svg';
import launch from '../assets/images/launch.svg';

export default function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const card = [
    {
      title: "Web Development",
      image: img1,
      description: "We can help you build SAAS/ E-commerce or Progressive Web applications (PWA).",
      alt: "Web Development Logo",
    },
    // {
    //   "title": "App Development",
    //   "image": img2,
    //   "description": "We can build native iOS and Android apps using React Native, which is performant and cost-effective.",
    //   "alt": "App Development SVG"
    // },
    {
      title: "UI/UX Designer",
      image: img3,
      description: "We ensure that all content within a user experience is delivered to the user at the right time, place, and format.",
      alt: "UI/UX Designer SVG",
    },
    // {
    //   "title": "Graphic Design",
    //   "image": img4,
    //   "description": "We create visual content to communicate messages by applying visual hierarchy and page layout techniques.",
    //   "alt": "Graphic Design svg"
    // },
    {
      title: "Strategic Partnerships",
      image: img5,
      description: "We partner with start-ups and other IT consulting companies to provide them with best software developers at affordable rates.",
      alt: "Strategic Partnerships",
    },
  ];

  const items = [
    {
      title: "High quality code",
      description: "We use clear, simple, well tested, bug-free, refactored, documented, and performant code.",
      src: code,
      alt: "High quality code"
    },
    {
      title: "Agile based decision making",
      description: "We perform collaborative, iterative, and transparent decision making process.",
      src: agile,
      alt: "Agile based decision making"
    },
    {
      title: "Efficient project management",
      description: "We have a firm grasp on the scope, budget, resources, personnel, and timeline dedicated to a project.",
      src: managgement,
      alt: "Efficient project management"
    },
    {
      title: "Human oriented approach",
      description: "Our designs are based upon an explicit understanding of users, tasks, and is driven and refined by user-centered evaluation.",
      src: humanFriendly,
      alt: "Human oriented approach"
    },
    {
      title: "Full stack teams",
      description: "We are a team of dedicated developers who specialize in various fields of software development.",
      src: team,
      alt: "Full stack teams"
    },
    {
      title: "Progressive Roadmap",
      description: "We are a result-driven Software development company that comprehends details of the client’s project and offers the best-fit technology solution.",
      src: progress,
      alt: "Progressive Roadmap"
    }
  ]


  const technologies = [
    { img: angular, name: "Angular" },
    { img: react, name: "React" },
    { img: nodejs, name: "Node" },
    { img: express, name: "Express" },
    { img: nextjs, name: "NextJS" },
    { img: psql, name: "Postgre" },
    { img: mongo, name: "MongoDB" },
    { img: firebase, name: "Firebase" },
    { img: python, name: "Python" },
    { img: docker, name: "Docker" },
    { img: redis, name: "Redis" },
    { img: Dgo, name: "DigitalOcean" },
    { img: aws, name: "AWS" },
  ];

  return (
    <>
    <div id="homePage">

    
      {/* Hero Section */}
      <div
        className="flex items-center justify-center bg-gradient-to-b pt-[30px] pb-[30px] xl:pt-[50px] xl:pb-[93px] mt-28"
        id="home"
      >
        <div className="relative max-w-[96rem] m-auto w-full">
          <div className="m-auto w-[90%]">
            <div className="flex flex-col-reverse items-center justify-center md:flex  md:flex-col-reverse lg:flex-row">
              <div className=" mt-[24px] flex flex-1 flex-col md:mt-0">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-[8px] md:mt-[90px]">
                      <p className="relative z-[2] text-center md:text-center lg:text-left">
                        <span className="text-center text-[14px] font-[300] text-[#424242] md:text-center md:text-[20px] md:font-[400] lg:text-left">
                          Welcome to&nbsp;
                        </span>
                        <span className="text-center text-[12px] font-[300] text-primary md:text-left md:text-[20px] md:font-[400]">
                          Constantsys Technologies!
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-[8px] lg:items-start">
                      <h1 className="relative z-[2] text-center text-[20px] font-[600] text-[#37474F] sm:text-[28px] md:text-center md:text-[28px] lg:text-left lg:text-[38px]">
                        Build Innovative Software Products that Scale with{" "}
                        <br /> us !<span className="text-primary"></span>
                      </h1>
                      <h5 className="relative z-[2] w-4/5 text-center text-[15px] text-[#37474F] md:w-full md:text-[25px] lg:text-left">
                        Bring your ideas to life!&nbsp;
                        <span className="text-primary"></span>
                      </h5>
                    </div>
                  </div>
                  <div className="relative z-[2] flex justify-center py-5 md:justify-center lg:justify-start">
                    <div className="min-w-[140px] rounded-[7px] bg-[#3498db] px-[24px] py-[12px] text-center md:min-w-[300px]">
                      <p className="text-[14px] font-[500] text-[#FFFFFF] md:text-[23px]">
                        <a href="#contact-us">Get Your Free Quote Today!</a>
                      </p>
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

              <div className="flex flex-[1.4] justify-center">
                <div className="relative z-[2] h-[350px] w-[90%] md:h-[500px] md:w-[95%]">
                  <img
                    className="bg-cover h-full w-full hero-img"
                    src={heroImg}
                    alt="Home cover image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Immersive Experiences */}
      <div className="bg-blue-100 py-[24px] md:py-[80px]">
        <div className="max-w-[96rem] m-auto w-full">
          <div className="m-auto w-[90%]">
            <div className="mb-[18px] flex justify-center pb-[23px] md:mb-[48px]">
              <div>
                <h3 className="pb-[6px] text-center text-[18px] font-[500] md:text-[35px] md:font-[600]">
                  <span className="text-[#192E35]">
                    We build immersive&nbsp;
                  </span>
                  <span className="text-primary">experiences</span>
                </h3>
                <p className="m-auto w-[90%] text-center text-[14px] text-[#2F4651] md:w-[70%] md:text-[22px]">
                  <span className="text-[#192E35]">
                    Constantsys Technologies is focused on delivering quality,
                    innovative solutions with groundbreaking technology.
                  </span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-[19px] gap-x-[3rem] md:grid-cols-2 md:gap-y-[5rem] lg:grid-cols-3">
              {card?.map(({ title, image, description, alt }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-[8px] bg-[#ebeff9] py-[26px] md:items-start md:gap-[15px] md:bg-inherit md:py-0"
                >
                  <div className="h-[90px] w-[90px]">
                    <img className="h-full w-full " src={image} alt={alt} />
                  </div>
                  <div>
                    <p className="text-[16px] font-[500] text-primary md:text-[18px]">
                      {title}
                    </p>
                  </div>
                  <div className="w-[70%] md:w-[80%]">
                    <p className="text-center text-[14px] text-[#484747] md:text-left md:text-[16px]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technologies  */}
      <div className="max-w-[96rem] m-auto w-full" id="technologies">
        <div className="m-auto w-[90%]">
          <div className="py-[24px] md:py-[48px]">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="flex-1">
                <div className="flex justify-center lg:justify-start">
                  <h1 className="text-[18px] font-[600] md:text-[35px]">
                    <span className="text-[#192E35]">We are&nbsp;</span>
                    <span className="text-primary">technology agnostic</span>
                  </h1>
                </div>
                <div>
                  <p className="my-[16px] text-center text-[14px] text-[#3A4754] md:py-[24px] md:text-[25px] lg:text-left">
                    Get valuable advice from industry specialists who cover a wide range of technological genres. Maintain current market trends and information to choose which technology is most suited for your forthcoming project.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-y-[3rem] gap-x-[3rem] py-[24px] md:grid-cols-4 md:gap-y-[5rem]">
                  {technologies.map((x, i) => (
                    <div className="flex items-center justify-center" key={x.name}>
                      <div className="h-[40px] w-[40px] md:h-[70px] md:w-[70px]">
                        <img src={x.img} alt={x.name} className="tech-images block w-full h-full object-contain" />
                        <div className="flex justify-center">
                          <p className="mt-[5px] text-sm font-semibold text-secondary">
                            {x.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img
                  className="side-image"
                  src={pairbros}
                  alt="pair programming "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How We work  */}
      <div className="flex bg-blue-100 flex-col gap-y-[22px] py-[70px] xl:bg-gradient-to-b xl:to-hero-gradient-end from-hero-gradient-start" id="HoweDoing">
  <div style={{ maxWidth: 1536, margin: "auto", width: "100%" }}>
    <div className="m-auto w-[90%]">
      <div className="flex w-full items-center justify-center pb-[40px] lg:justify-start lg:pb-[113px]">
        <div>
          <h3 className="text-center text-[18px] font-[600] md:text-[35px] md:font-[600]">
            <span className="text-[#192E35]">How we&nbsp;</span>
            <span className="text-primary">think, create &amp; iterate.</span>
          </h3>
          <p className="text-center text-[14px] text-[#2F4651] md:text-[22px] lg:text-left">
            <span className="text-[#2F4651]">
              We build things the Agile way
            </span>
          </p>
        </div>
      </div>
      <div className="grid gap-y-[18px] lg:grid-cols-4 lg:gap-x-[50px]">
        <div className="w-full">
          <div className="grid gap-[40px] py-[20px] lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
            <div className="flex items-center justify-start gap-8">
              <img
                className="h-[40px] w-[40px] lg:h-[85px] lg:w-[85px] process-img"
                src={planImg}
                alt="Plan"
              />
              <img
                alt="icon"
                src={rightProcess}
                className="hidden lg:visible lg:block lg:w-1/4 xl:w-1/3 2xl:w-full"
              />
            </div>
            <div className="flex w-4/5 flex-col gap-[6px] lg:w-full lg:pt-12">
              <p className="text-left text-[16px] font-medium text-[#2F4651] lg:text-[22px]">
                Plan
              </p>
              <p className=" text-left text-[14px] font-[400] text-[#455A64] lg:text-[18px]">
                Convert the requirements to a Beautiful ergonomic UI with the
                best UX
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-green-100 lg:hidden" />
        </div>
        <div className="w-full">
          <div className="grid gap-[40px] py-[20px] lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
            <div className="flex items-center justify-start gap-8">
              <img
                className="h-[40px] w-[40px] lg:h-[85px] lg:w-[85px] process-img"
                src={develop}
                alt="Develop"
              />
              <img
                alt="icon"
                src={rightProcess}
                className="hidden lg:visible lg:block lg:w-1/4 xl:w-1/3 2xl:w-full"
              />
            </div>
            <div className="flex w-4/5 flex-col gap-[6px] lg:w-full lg:pt-12">
              <p className="text-left text-[16px] font-medium text-[#2F4651] lg:text-[22px]">
                Develop
              </p>
              <p className=" text-left text-[14px] font-[400] text-[#455A64] lg:text-[18px]">
                Now we develop to bring the mockups to life
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-green-100 lg:hidden" />
        </div>
        <div className="w-full">
          <div className="grid gap-[40px] py-[20px] lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
            <div className="flex items-center justify-start gap-8">
              <img
                className="h-[40px] w-[40px] lg:h-[85px] lg:w-[85px] process-img"
                src={test}
                alt="Test & Deploy"
              />
              <img
                alt="icon"
                src={rightProcess}
                className="hidden lg:visible lg:block lg:w-1/4 xl:w-1/3 2xl:w-full"
              />
            </div>
            <div className="flex w-4/5 flex-col gap-[6px] lg:w-full lg:pt-12">
              <p className="text-left text-[16px] font-medium text-[#2F4651] lg:text-[22px]">
                Test &amp; Deploy
              </p>
              <p className=" text-left text-[14px] font-[400] text-[#455A64] lg:text-[18px]">
                We brainstorm requirements and discuss deliverables.
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-green-100 lg:hidden" />
        </div>
        <div className="w-full">
          <div className="grid gap-[40px] py-[20px] lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
            <div className="flex items-center justify-start gap-8">
              <img
                className="h-[40px] w-[40px] lg:h-[85px] lg:w-[85px] process-img"
                src={launch}
                alt="Launch"
              />
              <img
                alt="icon"
                src={rightProcess}
                className="hidden lg:visible lg:block lg:w-1/4 xl:w-1/3 2xl:w-full lg:hidden"
              />
            </div>
            <div className="flex w-4/5 flex-col gap-[6px] lg:w-full lg:pt-12">
              <p className="text-left text-[16px] font-medium text-[#2F4651] lg:text-[22px]">
                Launch
              </p>
              <p className=" text-left text-[14px] font-[400] text-[#455A64] lg:text-[18px]">
                Ship once we believe we have delivered nothing but the best.{" "}
              </p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-green-100 lg:hidden hidden" />
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Why us */}

      <div className="bg-gradient-to-b">
        <div className="relative max-w-[96rem] m-auto w-full">
          <div className="m-auto w-[90%]">
            <div>
              <div className="mt-[50px] flex flex-col gap-[10px] py-[10px] lg:mt-[125px]">
                <div className="w-full">
                  <h1 className="text-center text-[20px] font-semibold text-black-400 lg:text-left lg:text-[22px] lg:leading-[45px] xl:text-left xl:text-[31px] xl:leading-[50px] 2xl:text-left 2xl:text-[38px] 2xl:leading-[57px]">
                    Why&nbsp;<span className="text-primary">Constantsys technologies?</span>
                  </h1>
                </div>
                <div>
                  <h5 className="text-center text-[14px] text-[#2F4651] lg:text-left xl:text-left xl:text-xl 2xl:text-left 2xl:text-2xl 2xl:font-normal">
                    Some reasons that makes us stand out!
                  </h5>
                </div>
              </div>
              <div className="m-auto mb-[100px] flex items-center justify-center ">
                <div className="grid-cols-1d grid py-[57px] px-[40px] md:grid-cols-2 md:gap-y-[3rem] md:gap-x-[3rem] lg:grid-cols-3 lg:pt-[100px]">
                  {items?.map(({ title, description, src, alt }) =>
                    <div key={title} className="flex flex-col items-center gap-[8px] md:h-[300px] md:items-start md:gap-[15px] bg-inherit md:py-0 md:drop-shadow-md relative z-10 md:bg-[rgb(255,255,255)]">
                      <div className="flex flex-col items-center px-[10px] pt-[34px] lg:items-start">
                        <div className="md:items:start flex items-center justify-center md:justify-start">
                          <img height="60px" width="60px" src={src} alt={alt} />
                        </div>
                        <p className="mt-4 text-center text-[17px] font-medium leading-[25.5px] text-description-tex-color lg:text-left">
                          {title}
                        </p>
                        <p className="mt-2 text-center text-description-lighter lg:text-left">
                          {description}
                        </p>
                        <div className="m-auto mt-11 h-[1px] w-[185px] bg-divider md:hidden">
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="-z-1 absolute left-0 hidden h-[100px] sm:hidden -top-2 md:block">
            <svg class="md:w-[400px] lg:w-[650px] xl:w-[850px] 2xl:w-[1043px]" xmlns="http://www.w3.org/2000/svg" height="1436" fill="none" viewBox="0 0 1043 1436">
              <path stroke="#B0C5B2" stroke-opacity="0.6" d="M476.313 1334.31l.407.28-.407-.28c-40.629 60.56-90.116 90.44-142.591 98.16-52.493 7.72-108.04-6.73-160.778-34.94-78.912-44.02-146.877-109.3-196.927-189.15-111.019-178.92-178.319-413.371-180.794-622.578C-208.232 268.565 21.04-11.076 321.216 1.586c268.428 11.297 544.945 226.428 668.296 488.118 45.908 96.822 73.988 213.405 33.198 306.744-42.038 95.391-126.847 128.019-214.687 158.859-3.322 1.166-6.649 2.33-9.979 3.495-84.622 29.606-170.638 59.698-222.05 144.758-20.477 33.81-33.64 72.27-46.769 110.63-.655 1.91-1.31 3.83-1.966 5.74-13.808 40.27-27.98 80.18-50.946 114.38z">
              </path>
            </svg>
          </div>
          <div class="-z-1 absolute left-0 hidden h-[100px] sm:hidden top-52 md:block">
            <svg class="md:w-[350px] lg:w-[500px] xl:w-[700px] 2xl:w-[1043px]" xmlns="http://www.w3.org/2000/svg" height="1082" fill="none" viewBox="0 0 776 1182">
              <path stroke="#B0C5B2" stroke-opacity="0.6" d="M262.68 1093.28l-.398-.3c-37.2 51.01-81.283 77.05-127.356 84.94-46.084 7.9-94.212-2.34-139.497-23.99-67.714-33.87-125.263-85.56-166.75-149.75-91.987-143.891-144.216-334.748-140.508-506.754C-305.946 236.615-97.761-.196 164.218 1.364c234.253 1.374 469.836 170.175 570.271 381.768 37.394 78.28 58.65 173.314 20.396 251.265-39.403 79.694-114.425 109.036-192.061 137-2.938 1.058-5.88 2.114-8.824 3.171-74.781 26.851-150.804 54.147-198.128 125.643-18.848 28.43-31.434 60.461-43.984 92.402l-1.88 4.782c-13.197 33.535-26.7 66.775-47.726 95.585l.398.3z">
              </path>
            </svg>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
