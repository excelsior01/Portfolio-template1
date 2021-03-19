import React from "react";
import { Link } from "react-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {motion} from "framer-motion"

const Socials = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2,duration:1}} className='socials'>
      <div className='container'>
        <div className='list'>
        <span></span>
            <a className="linkedin" href=''>
              <LinkedInIcon />
            </a>
            <span></span>
            <a href=''>
              <GitHubIcon />
            </a>
            <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Socials;
