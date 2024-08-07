import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.scss';
// import profilePhoto from './path-to-your-photo.jpg';

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
    x: -100,
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

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div className='about-section'>
      <div className="wrapper">
      <h1 className='title'>About Me</h1>
      <motion.div
        className="about-container"
        ref={ref}
        variants={textVariants}
        initial="initial"
        animate={controls}
      >
        <div className="content">
          <div className="text-section">
            <motion.div className="intro" variants={childTextVariants}>
              <h1>Introduction</h1>
              <p>Hi, I'm Karthikeyan, a frontend developer passionate about crafting intuitive and dynamic user interfaces. I recently completed my MSc in Information Technology, where I honed my skills in web development and gained a solid foundation in computer science principles.</p>
            </motion.div>
            <motion.div className="journey" variants={childTextVariants}>
              <h1>My Journey</h1>
              <p>During my academic journey, I worked on various projects that allowed me to apply my knowledge and grow as a developer. I have a strong command of modern frontend technologies like React, HTML, CSS, and JavaScript, and I'm always eager to learn and adapt to new tools and frameworks.</p>
            </motion.div>
            <motion.div className="personal-touch" variants={childTextVariants}>
              <h2>Personal Touch</h2>
              <p>When I'm not coding, you can find me exploring new technologies, reading tech blogs, or engaging in outdoor activities like gaming and YouTubing. I believe in continuous learning and am enthusiastic about contributing to innovative projects that make a difference.</p>
            </motion.div>
          </div>
          {/* Uncomment and update the path to your photo
          <div className="photo-section">
            <img src={profilePhoto} alt="Karthikeyan" />
          </div>
          */}
        </div>
      </motion.div>
      </div>
    </div>
  );
}

export default About;
