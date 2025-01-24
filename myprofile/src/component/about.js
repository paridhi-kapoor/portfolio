import React, { useState, useEffect } from 'react';

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
    Hi, I’m Paridhi Kapoor, a second-year BTech student in Mechanical Engineering at NIT Kurukshetra , with a passion for coding and web development.
    I’m currently expanding my skills in React JS, SQL, and Data Structures & Algorithms (DSA) to build efficient and innovative digital solutions. 
    I believe technology is an art, and I’m here to craft it beautifully.
  `;

  return (
    <section id="about" className="about">
      <h2>Let me introduce myself</h2>
      <img src="profile.png" alt="Paridhi" />
      <p>
        <TypingEffect text={text} speed={50} />
      </p>
    </section>
  );
}

export default About;
