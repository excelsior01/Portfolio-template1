import React from "react";
import { motion } from "framer-motion";

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

const item2 = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

const About = () => {
  return (
    <motion.div className='about'>
      <div className='container'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className='title'
        >
          <motion.h2>About me </motion.h2>
          <span></span>
        </motion.div>
        <div className='wrapper'>
          <motion.div
            initial='hidden'
            animate='visible'
            exit={{ opacity: 0, x: -50 }}
            variants={list}
            className='desc'
          >
            <motion.p variants={item}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
            <motion.p variants={item2}>
              Architecto numquam ipsum sit reiciendis, magnam, fugiat quis
              dolorem vitae obcaecati, ex possimus sequi ullam!
            </motion.p>

            <motion.p variants={item}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis officia sint, doloribus totam quaerat dolorem animi
              natus ipsum esse eveniet, eaque veniam assumenda labore.
            </motion.p>
            <motion.p variants={item2}>
              Deserunt consequatur obcaecati mollitia recusandae rerum,
              temporibus nulla quas illum eveniet enim aspernatur est, excepturi
              ipsa sit facilis facere ratione fuga placeat dicta accusantium ex
              ea. Voluptatem animi aperiam quas dicta aliquid.
            </motion.p>
          </motion.div>
          <button>
            <a href='https://www.linkedin.com/in/mourade-a-177a0b113/'>
              Resume
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
