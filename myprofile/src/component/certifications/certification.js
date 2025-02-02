import React from "react";
import "./certifications.css";

const Certification = () => {
    return (
        <section  className="certification">  
            <h2>My Certifications</h2>
            <div className="certification-container">
            < div className="certification-card">
            <img src="python.png" alt="Certification 1" />
            <h3>Python for Beginners</h3>
            <p>I completed a course on Python for Beginners from SimpliLearn. The course covered the basics of Python programming.</p>
            <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTAyNDA5M18xNzEyMzIyODQ1LnBuZyIsInVzZXJuYW1lIjoicGFyaWRoaSBrYXBvb3IifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4214%2FPython-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1369856546795471991&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT7FMNTD3yzGt8EyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAHpyo7VBAAAA" target="_blank" rel="noopener noreferrer">Take A Look</a>
            </div>

            < div className="certification-card">
            <img src="postman.png" alt="Certification 2" />
            <h3>Postman API Fundamentals Student Expert</h3>
            <p>Successfully Completed this program on Postman. Learnt to create and test consuming APIs in Postman and applications</p>
            < a href="https://badgr.com/public/assertions/yrSeUx9HQu-SxqxQxh85yA?identity__email=paridhikapoor2004@gmail.com" target="_blank" rel="noopener noreferrer">Take A Look</a>
            </div>
            
            < div className="certification-card">
            <img src="SIH.jpg" alt="Certification 3" />
            <h3>Student India Hackathon '24</h3>
            <p>Participated in the Student India Hackathon '24 and developed a project on the theme of "Crop Disease Prediction".</p>
            </div>

            < div className="certification-card">
            <img src="DIP.jpg" alt="Certification 4" />
            <h3>Data Image Processing Workshop </h3>
            <p>Participated in the Data Image Processing Workshop and gained hands-on experience in image processing using Python.Also, developed "AIR-HOCKEY GAME", don't forget to check it out.</p>
            </div>
            </div>
        </section>  
    
    );
}

export default Certification ;