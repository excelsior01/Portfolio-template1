import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const list = {
  visible: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 1],
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Home = () => {
  return (
    <motion.div animate={{opacity:1}}  exit={{opacity:0,transition:{duration:1}}} >
      <div className='container'>
        <div className='wrapper'>
          <div className='external'>
            <motion.div initial='hidden' animate='visible' exit={{ opacity: 0, x: -50 }} variants={list} className='title'>
                            <motion.div exit={{ opacity: 0, x: -50  }} transition={{duration:1}} variants={item} className='title-item1'>
                                Welcome
                            </motion.div>
                            <motion.div exit={{ opacity: 0, x: -50  }} transition={{duration:1}} variants={item} className='title-item2'>
                                to my world
                            </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1,transition:{delay:1,duration:2} }}    className='description'>
                    <motion.div exit={{ opacity: 0 ,transition:{duration:2}}} className='desc-item1'>
                        <div className='murad'>Lorem, ipsum.</div>
                    </motion.div>
                    <motion.div className='desc-item2'>
                                <motion.div exit={{ opacity: 0 }} className='item2-1'>
                                        <div>
                                            &nbsp;
                                            <span >
                                            Lorem, ipsum dolor. &nbsp;
                                            </span>
                                            <Link
                                            style={{   textDecoration: "none", color: " rgb(247, 64, 64)" }}
                                            to='/about'
                                            className="know-about"
                                            >
                                            
                                             sit amet consectetur.
                                            </Link>
                                        </div>
                                </motion.div>

                                <motion.div exit={{ opacity: 0,transition:{duration:2} }} className='item2-2'>
                                    <div>
                                        “  Repudiandae vero deleniti illo beatae pariatur, error doloribus, quisquam velit optio, maxime voluptas odio est minus nam fugiat consequuntur iusto!”
                                    </div>
                                </motion.div>
                    </motion.div>
            </motion.div>
            <motion.div>
              <Socials/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
