import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";

function Header() {
    const hamburgerToggle = () => {
        const hamburger = document.getElementById("hamburger");
        const mobileMenu = document.getElementById("mobileMenu");
        if (!!hamburger && !!mobileMenu){
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("open");
        }
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                }
            }
        );
    }

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            const header = document.querySelector("header");
            header?.classList.toggle("scrolled", window.scrollY > 50);
        });
    })

    function HamburgerResize() {
        useEffect(() => {
          const handleResize = () => {
            const hamburger = document.getElementById("hamburger");
            const mobileMenu = document.getElementById("mobileMenu");
      
            if (!!hamburger && !!mobileMenu) {
              hamburger.classList.remove("active");
              mobileMenu.classList.remove("open");
            }
          };
      
          window.addEventListener("resize", handleResize);
        }
    )}

    function PageChange() {
        const location = useLocation();
        useEffect(() => {
            const handleRouteChange = () => {
              const hamburger = document.querySelector(".hamburger");
              const mobileMenu = document.querySelector(".mobile-menu");
        
              if (hamburger && mobileMenu) {
                hamburger.classList.remove("active");
                mobileMenu.classList.remove("open");
              }
            };
        
            handleRouteChange();
          }, [location]);
    }
    PageChange();
    HamburgerResize();

    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function () {
            let links = document.querySelectorAll(".header-links > *");
            let currentUrl = window.location.pathname;
        
            links.forEach(link => {
                if (link.href.includes(currentUrl)) {
                    link.classList.add("active");
                }
            });
        });
    })

    return (
        <>
        
        <header>
            <div className="logo-div">
                <Link to="/" className="logo">loopstudio</Link>
            </div>
            <div className="nav-div">
                <div className="nav-holding">
                    <nav className="nav-links">
                        <NavLink to='/'>Index</NavLink>
                        <NavLink to='/'>About</NavLink>
                        <NavLink to='/Carer'>Career</NavLink>
                        <NavLink to='/about'>Events</NavLink>
                        <NavLink to='/Features'>Products</NavLink>
                        <NavLink to='/Features'>Support</NavLink>
                    </nav>

                      
                </div>
                <div onClick={hamburgerToggle} className="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="mobile-menu" id="mobileMenu">
                    <nav className="mobile-nav-links">
                    <NavLink to='/'>Index</NavLink>
                        <NavLink to='/'>About</NavLink>
                        <NavLink to='/Carer'>Career</NavLink>
                        <NavLink to='/about'>Events</NavLink>
                        <NavLink to='/Features'>Products</NavLink>
                        <NavLink to='/Features'>Support</NavLink>
        
                    </nav>
                    
                </div>
            </div>
        </header>
        </>
    );
}

export default Header;