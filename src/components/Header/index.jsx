import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import './header.scss';
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();
  const [bgColor, setBgColor] = useState('none');
  const [shadow,setShadow] = useState('');
  const [currentLocation,setLocation] = useState();
  useEffect(()=>{
    setLocation(location.pathname);
  },[location]);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setBgColor('#f7f5fd');
      setShadow('shadow-md') // Change to the color you want when scrolled down
    } else {
      setBgColor('none');
      setShadow(''); // Reset to original color when scrolled up
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up event listener on component unmount
    };
  }, []);

  const sideBarToggle = () => {
    let nav = document.getElementById('mobile-nav');
    if(nav != null){
      if(nav.classList.contains('open')){
        nav.classList.remove('open');
      }else{
        nav.classList.add('open');
      }
    }
  }
  return (
    <div className="w-full">
      <nav
        className={`sticky top-0 bg-[${bgColor}] ${shadow} z-30 block items-start duration-300 ease-in-out`}
        // style={{
        //   // boxShadow: "#d5ddfda1 0px 4px 25px"
        // }}
        
      >
        <div className="w-full max-w-full">
          <div className="m-auto w-[90%]">
            <div className="flex flex-col-reverse  md:flex-row">
              <div className="flex w-full items-center justify-between py-[20px]">
                <Link className="" to="/">
                  <img
                    className="h-[25px] lg:h-[30px]"
                    src={logo}
                    alt="Constantsys Logo"
                  />
                </Link>
                <div className="items-center mobile-view justify-between lg:flex" id="mobile-nav">
                    <i className="bi bi-x icon-x text-white" onClick={() => sideBarToggle()}></i>
                  <div className="flex w-full items-center gap-[10px] lg:gap-[40px] text-black-400">
                      <Link className={`shrink-0 font-medium text-primary ${currentLocation == '/' ? 'active' : ''}`} to="/" onClick={() => sideBarToggle()}>
                        {currentLocation == '/' && <i className="bi bi-dot dot-icon"></i>}Home
                      </Link>
                      <Link className={`shrink-0 font-medium text-primary ${currentLocation == '/about-us' ? 'active' : ''}`} to="/about-us" onClick={() => sideBarToggle()}>
                      {currentLocation == '/about-us' && <i className="bi bi-dot dot-icon"></i>}
                        Get to Know US
                      </Link>
                      <Link className={`shrink-0 font-medium text-primary ${currentLocation == '/portfolio' ? 'active' : ''}`} to="/portfolio" onClick={() => sideBarToggle()}>
                      {currentLocation == '/portfolio' && <i className="bi bi-dot dot-icon"></i>}
                        Portfolio
                      </Link>
                      <Link className={`shrink-0 font-medium text-primary ${currentLocation == '/join-us' ? 'active' : ''}`} to="/join-us" onClick={() => sideBarToggle()}>
                      {currentLocation == '/join-us' && <i className="bi bi-dot dot-icon"></i>}
                        Join Us
                      </Link>
                      <Link className={`shrink-0 font-medium text-primary ${currentLocation == '/contact-us' ? 'active' : ''}`} to="/contact-us" onClick={() => sideBarToggle()}>
                      {currentLocation == '/contact-us' && <i className="bi bi-dot dot-icon"></i>}
                        Contact Us
                      </Link>
                  </div>
                </div>
                <div className="block flex h-[43px] w-[43px] cursor-pointer items-center justify-center lg:hidden">
                  <button
                    type="button"
                    data-drawer-target="drawer-example"
                    data-drawer-show="drawer-example"
                    aria-controls="drawer-example"
                    onClick={() => sideBarToggle()}
                  >
                    <img
                      alt="ICON"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMjAuMjIyOUM3LjEwNDU3IDIwLjIyMjkgOCAxOS4zNDMgOCAxOC4yNTc1QzggMTcuMTcyIDcuMTA0NTcgMTYuMjkyIDYgMTYuMjkyQzQuODk1NDMgMTYuMjkyIDQgMTcuMTcyIDQgMTguMjU3NUM0IDE5LjM0MyA0Ljg5NTQzIDIwLjIyMjkgNiAyMC4yMjI5WiIgZmlsbD0iIzQwQkE3NyIvPgo8cGF0aCBkPSJNMzEgMTcuMjc0OUgxMUMxMC40NDc3IDE3LjI3NDkgMTAgMTcuNzE0OSAxMCAxOC4yNTc2VjE5LjI0MDRDMTAgMTkuNzgzMSAxMC40NDc3IDIwLjIyMzEgMTEgMjAuMjIzMUgzMUMzMS41NTIzIDIwLjIyMzEgMzIgMTkuNzgzMSAzMiAxOS4yNDA0VjE4LjI1NzZDMzIgMTcuNzE0OSAzMS41NTIzIDE3LjI3NDkgMzEgMTcuMjc0OVoiIGZpbGw9IiM0MEJBNzciLz4KPHBhdGggZD0iTTMxIDI0LjE1NDNINUM0LjQ0NzcyIDI0LjE1NDMgNCAyNC41OTQzIDQgMjUuMTM3VjI2LjExOThDNCAyNi42NjI1IDQuNDQ3NzIgMjcuMTAyNSA1IDI3LjEwMjVIMzFDMzEuNTUyMyAyNy4xMDI1IDMyIDI2LjY2MjUgMzIgMjYuMTE5OFYyNS4xMzdDMzIgMjQuNTk0MyAzMS41NTIzIDI0LjE1NDMgMzEgMjQuMTU0M1oiIGZpbGw9IiM0MEJBNzciLz4KPHBhdGggZD0iTTMxIDkuNDEzMDlINUM0LjQ0NzcyIDkuNDEzMDkgNCA5Ljg1MzA3IDQgMTAuMzk1OFYxMS4zNzg2QzQgMTEuOTIxMyA0LjQ0NzcyIDEyLjM2MTMgNSAxMi4zNjEzSDMxQzMxLjU1MjMgMTIuMzYxMyAzMiAxMS45MjEzIDMyIDExLjM3ODZWMTAuMzk1OEMzMiA5Ljg1MzA3IDMxLjU1MjMgOS40MTMwOSAzMSA5LjQxMzA5WiIgZmlsbD0iIzQwQkE3NyIvPgo8L3N2Zz4K"
                      height={43}
                      width={43}
                      style={{filter: 'hue-rotate(68deg)'}}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
