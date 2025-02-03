import React, { useState, useEffect } from 'react';
import './about.css';

// TypingEffect component
const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

// About component
const About = () => {
  const text = `
     A sophomore in Mechanical Engineering at NIT Kurukshetra with a passion for technology and innovation.
     Currently, I am honing my skills in frontend development, especially in React JS, and have a growing interest in backend development like Node JS. 
     Along with my web development journey, I have a keen interest in Data Science and AI, and I am excited to combine these fields to create impactful and efficient innovative solutions.
  `;

  return (
    <section id="about" className="about">
   
      <div className="about-content">
      <h2>Hi , I am Paridhi Kapoor</h2>
        <p><TypingEffect text={text} speed={50} /></p>
        <div className="cv-button">
        <button className="btn">
          <a href="Paridhi_Kapoor(2).pdf" download="Paridhi_Kapoor.pdf">Download My CV</a>
        </button>
      </div>
      </div>
      <img src="profile.png" alt="Paridhi" />
    </section>
  );
}

export default About;
