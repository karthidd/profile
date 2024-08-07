import { motion } from 'framer-motion';
import './Hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const childTextVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const scrollButtonVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const slidingTextVariants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: '-150%',
    transition: {
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={childTextVariants}> Hi, I'm KARTHIKEYAN</motion.h2>
          <motion.h1 variants={childTextVariants}>Frontend Developer</motion.h1>
          {/* <motion.p>Creating beautiful web experiences!</motion.p> */}
          <motion.div className="buttons" variants={childTextVariants}>
          <a target='_blank' href='https://drive.google.com/file/d/17Ob9xNJLjRKvY-6wrMedGKOAGwlFJSj5/view?usp=drive_link'> <motion.button >Resume</motion.button></a>            <motion.button><a href='#Contact'>Contact Me</a></motion.button>
          </motion.div>
          <motion.img variants={scrollButtonVariants} initial="initial" animate="animate" src="/scroll.png" alt="Scroll" />
        </motion.div>
      </div>
      <div className="slidingTextContainer">
        <motion.div className="slidingText" variants={slidingTextVariants} initial="initial" animate="animate"></motion.div>
        

        
      </div>
      <div className="imageContainer">
        {/* <img src="/hero1.png" alt="Hero" /> */}
      </div>
    </div>
  );
};

export default Hero;
