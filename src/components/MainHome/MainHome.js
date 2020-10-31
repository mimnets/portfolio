import React from 'react';
import './MainHome.css';
const MainHome = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-6 grid">
                    <h2>WELCOME TO</h2>
                    <h2><span class="blue-highlight">Monirul Islam Monir's</span> Website!</h2>
                    <h4>World-class professional Web Developer</h4>
                    <br/>
                    <span>I can help you to build your professional portfolio websites, company websites, business websites with using modern web technology; Like : CSS, HTML5, JavaScript, Node.js, etc. I have learn Web Developmet from world's famous web guru <span class="blue-highlight">Jhankar Mahbub</span>. I can also help you to provide technical supprt service regarding your complete IT solutions. I have more than 10 years of experience working as a Technical Support Executive at <a id="icenter-link" href="http://www.icentre-bd.com" target="_blank">iCenter</a>.</span>
                    <br/>
                    <br/>
                    <br/>
                    <a className="btn btn-primary btn-lg active" role="button" href="https://www.linkedin.com/in/mdmonirulislammonir/" target="_blank">HIRE ME</a>
                </div>
                <div className="col-md-6 grid">
                    <img src="https://1.bp.blogspot.com/--CA3j7YWfOs/X52AzpJq3YI/AAAAAAAAomE/IWJeJmaaI7QUN_y7PvVdDxescWNfiT85wCLcBGAsYHQ/s570/monirul-hero-image.jpg" alt="" />
                </div>
            </div>
            <div className="row contianer">
                <div className="col-md-6 grid">
                    <h2>Dream big</h2>
                    <img src="https://1.bp.blogspot.com/-zTgkeIUvR1o/X5wyYAy5a_I/AAAAAAAAolU/43aLjrNI2jkkU4HdhePcHaHNRfATOUeYACLcBGAsYHQ/s1038/monirul-portfolio.png"  alt=""/>
                </div>
                <div className="col-md-6 grid">
                <h3>Become World's No. 1  Web Developer</h3>
                <p>I dream big with my hard working. I wish to be a world's no. 1 web developer to deliver my clients a good web experiences with their respective requirements. I have started my web developemnt journey @ 25th June, 2020 with Programming Hero team.</p>
                <a className="btn btn-primary btn-lg active" role="button" href="https://www.linkedin.com/in/mdmonirulislammonir/" target="_blank">Let's Connect</a>
                </div>
            </div>
        </section>
    );
};

export default MainHome;