import React from 'react';
import Header from './component/Header/header';
import About from './component/about/about';
import Projects from './component/project';
import Skills from './component/skills';
import Contact from './component/contact';
import Footer from './component/footer';
import './App.css';
import LoadingPage from './component/loading';
import { useState, useEffect } from 'react';
import Certification from './component/certifications/certification';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading page
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingPage />;
    } 
    else{
      return (
        <div>
          <Header />
          <About />
          <Projects />
          <Skills />
          <Certification/>
          <Contact />
          <Footer />
        </div>
      );
    }
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
