import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './Portfolio.scss';

const items = [
    { id: 1, title: "E-Commerce", type: "video", src: "/make.mp4", desc: "This project is a fully functional e-commerce website designed to provide a seamless online shopping experience. The website is built using modern web technologies including HTML, CSS, JavaScript, and React. It features a user-friendly interface, dynamic product listings.", link: "https://make-u-shopping.web.app/" },
    { id: 2, title: "Food Delivery App", type: "video", src: "/fooddel.mp4", desc: "This project is a food delivery website designed to provide a convenient and efficient way for users to order food from local restaurants. The website is built using modern web technologies including HTML, CSS, JavaScript, and React. It offers a user-friendly interface, real-time order tracking, and a seamless ordering process.", link: "https://foodvangapogalam.web.app/" },
    { id: 4, title: "University", type: "video", src: "/univesity.mp4", desc: "This project is a landing page for a university, designed to provide prospective students, parents, and other visitors with an engaging and informative introduction to the institution. The website is built using HTML, CSS, JavaScript, and React. It features a visually appealing design, easy navigation, and essential information about the university.", link: "https://educity-collage.web.app/" },
];

const Single = ({ item }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.section ref={ref} style={{ y, opacity }} className="project-section">
            <div className="container">
                <div className="wrapper">
                    <div className="mediaContainer">
                        {item.type === 'image' ? (
                            <img src={item.src} alt={item.title} />
                        ) : (
                            <video src={item.src} controls />
                        )}
                    </div>
                    <motion.div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button>Live Preview</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const Portfolio = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>My Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
