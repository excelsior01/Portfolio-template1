import React, { useState, useEffect ,useRef} from "react";
import { Link, withRouter } from "react-router-dom";
import Hamburger from "./Hamburger";
import {motion} from "framer-motion";

const Header = ({ history }) => {
  const [state, setState] = useState({
    intial: null,
    clicked: false,
    menuName: "Menu"
  });
  const [disabled,setDisabled] = useState(false)

  let header = useRef(null);


  useEffect(()=>{

    history.listen(()=>{
      setState({clicked:false, menuName: "menu"})
    })

  },[state])

  
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(()=>{
      setDisabled(false)
    }, 1200)
  }


  const handleClick = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
      
      console.log(state);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
      console.log(state);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      console.log(state);
    }
  };

  return (
    <motion.header className="header" initial={{opacity:0,y:-50}} animate={{opacity:1,y:0,transition:{duration:1}}} exit={{opacity:1,transition:{duration:1}}} ref={e=>(header = e)}>
      <div className='container'>
        <div className='inner-header'>
          <div className='logo'>
            <Link   to='/'>PORTFOLIO.</Link>
          </div> 
          <div className='menu'>
            <button style={{ fontSize: "1.2rem" }} disabled={disabled} onClick={handleClick}>
              <Link style={{ textDecoration: "none", color:"white" }}  to="#">Menu</Link>
            </button>
          </div>
        </div>
      </div>
       <Hamburger state={state} /> 
    </motion.header>
  );
};

export default withRouter(Header);
