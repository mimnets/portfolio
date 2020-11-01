import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="container" id="resume">
            <div><h1>About me | My Resume</h1></div>
            <div className="row resume-container">
                <div className="col-md-6">
                    <h1>Md. Monirul Islam Monir</h1>
                    <h4>Jr. Web Developer, IT Support Engineer</h4>
                    <a href="mailto:mdmonirulislammonir@gmail.com">mdmonirulislammonir@gmail.com</a><br/>
                    <a href="">Linkedin.com/in/mdmonirulislammonir</a><br/>
                    <a href="">Github.com/mimnets</a>

                </div>
                <div className="col-md-6">
                    <h1>01743762978</h1>
                    <h1>Auchpara, Tongi,</h1>
                    <h1>Gazipur – 1711</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>PROGRAMMING & IT SKILLS:</h1>
                    <strong>• Expertise:</strong> <span>ReactJS, NodeJS, MongoDB, JavaScript, Firebase, MacOS, Networking, Hardware and Software Troubleshooting.</span><br/>
                    <strong>• Comfortable:</strong> <span>CSS, Bootstrap, Material UI, HTML5, SEO, SMM.</span><br/>
                    <strong>• Familiar:</strong> <span>Linux, ASW, Azure, Google Cloud, Python, Windows Administration.</span><br/>
                    <strong>• Tools:</strong> <span>Git, VSCode, Photoshop, ERP.</span>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>PROFESSIONAL EXPERIENCES:</h1>
                        <h5>Apple Support Specialist, Satcom iCenter Limited (December 2011 - Present)</h5>
                        <span>• Assuring proper documentation which helped the company to make the service
                        in a structured way.</span>
                        <h5>Support Engineer, QSR Systems PVT Ltd (October 2010 - November 2011)</h5>
                        <span>• Manage all customers and providing online and on-site support about their Servers
                        and PC.</span>
                        <h5>Webmaster, Eagle Empire Pacific Ltd (September 2009 - July 2010)</h5>
                        <span>• Doing online marketing for customer’s websites with SEO, Social Network, Social
                        Media, Blogging etc.</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;