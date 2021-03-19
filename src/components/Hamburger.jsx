import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Power2 } from "gsap";

//images
import about from "./assets/about.jpg";
import work from "./assets/work.jpg";
import contact from "./assets/contact.jpg";
 
const options = [
  { name: "about", image: about },
  { name: "works", image: work },
  { name: "contact", image: contact },
  
];

const Hamburger = ({ state }) => {
  let hamburgerMenu = useRef(null);
  let secondaryBack = useRef(null);
  let menuLayer = useRef(null);
  let cityBackground = useRef(null)
  useEffect(() => {
    if (state.clicked === true) {
      staggerReveal(secondaryBack, menuLayer);
    } else if (state.clicked === false) {
      staggerDisappear(secondaryBack, menuLayer);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.to([node1, node2], {
      duration: 0.7,
      height: "100vh",
      opacity: 1,
      y:0,
      top: "200px",
      display:"flex",
      ease: Power2.easeInOut,
      stagger: {
        amount: 0.2,
      },
    });
  };
  const staggerDisappear = (node1, node2) => {
    gsap.to([node2, node1], {
      duration: 0.7,
      height: 0,
      y:-400,
      display:"none",
      ease: Power2.easeInOut,
      stagger: {
        amount: 0.2,
      },
    });
  };


  
  const handleCity = city =>{ 
    gsap.to(cityBackground,{
      
      duration: 0,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100%",
      background: `url(${city})  `,
  
      
   
       
    });
    
    gsap.to(cityBackground,{
      duration: 0.4,
      opacity: 1,
      ease: Power2.easeInOut
    });  
    
    gsap.from(cityBackground,{
      duration: 0.5,
      
      transform: "right top"
    });
  };


  const handleCityReverse = () =>{
    gsap.to(cityBackground,{
      duration: .4,
      opacity:0
    });
  };
 

  const handleHover = e =>{
      gsap.to(e.target,{
        duration: .3,
        skewX:4,
        y:3,
        ease: Power2.easeInOut
      })
  }


  const handleHoverExit = e =>{
    gsap.to(e.target,{
      duration: .3,
      y:-3,
      skewX: 0,
      ease: Power2.easeInOut
    })
  }



  return (
    <div ref={(el) => (hamburgerMenu = el)} className='hamburger-menu'>
      <div ref={(el) => (menuLayer = el)} className='menu-layer'>
        <div ref={e=>(cityBackground = e)} className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              



              {
                options.map(el => {
                  return (
                    <Link to={`/${el.name}`} key={el.name} onMouseEnter={() => handleCity(el.image)} onMouseOut={handleCityReverse}>
                      {el.name}
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => (secondaryBack = el)}
        className='menu-secondary-background-color'
      ></div>
    </div>
  );
};

export default Hamburger;
