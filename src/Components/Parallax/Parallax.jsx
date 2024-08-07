import './Parallax.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Parallax = ({ type }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start(index => ({
        x: [1000, 0],
        opacity: [0, 1],
        transition: { duration: 0.5, delay: index * 0.5 },
      }));
    }
  }, [controls, inView]);

  const images = [
    { className: 'html', name: 'HTML' },
    { className: 'css', name: 'CSS' },
    { className: 'js', name: 'JavaScript' },
    { className: 'react', name: 'React' },
    { className: 'github', name: 'GitHub' },
  ];

  return (
    <div className="parallax light-theme">
      <motion.h1>{type === 'services' ? 'What We Do' : 'SKILLS'}</motion.h1>
      <div className="images-container" ref={ref}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-wrapper"
            initial={{ x: 1000, opacity: 0 }}
            animate={controls}
            custom={index}
          >
            <div className={image.className}></div>
            <p className="image-name">{image.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
