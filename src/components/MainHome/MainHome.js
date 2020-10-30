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
                    <img src="https://1.bp.blogspot.com/-I133jKKCC9g/X5wyeHKUlsI/AAAAAAAAolY/hyzB7NE3Uak03gjqBVsfDifjwr3RetoHgCLcBGAsYHQ/s714/monirul-portfolio2.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default MainHome;