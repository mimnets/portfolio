import React from 'react';
import './ProjectItem.css';
const ProjectItem = () => {
    return (
        <section className="container project-container">
            <div className="row my-5">
            <div className="col-md-6">
                <h1>Creative Agency</h1>
                <span>Creative agency is a website who provides website design, develoment services. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aliquam architecto unde, minima magnam ex corrupti tempore fuga repellendus pariatur. Rerum exercitationem, debitis ab reiciendis expedita vel vitae deleniti ducimus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis ullam nihil consectetur deserunt amet, molestiae dicta temporibus quasi sequi voluptate nulla ex quo. Quo consequuntur blanditiis explicabo quos nam!
                </span>
                <h4>Technology use:</h4>
                <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>React Router</li>
                </ul>
            </div>
            <div className="col-md-6">
                <div className="image-container">
                <img className="image" src="https://1.bp.blogspot.com/-1O2PBandcPg/X52Oms_mTVI/AAAAAAAAom8/N6hDJCikiT0jvUtAyZAC6wm_pmr45CFZQCLcBGAsYHQ/s570/creative-agency.jpg" alt=""/>
                <div className="middle">
                <div className="text"><a href="https://mimnets-creative-agency.web.app/" target="_blank">Creative Agency</a></div>
                </div>
                </div>
                
            </div>
        </div>

        <div className="row my-5">
            <div className="col-md-6">
            <div className="image-container image-fluid">
                <img className="image" src="https://1.bp.blogspot.com/-1O2PBandcPg/X52Oms_mTVI/AAAAAAAAom8/N6hDJCikiT0jvUtAyZAC6wm_pmr45CFZQCLcBGAsYHQ/s570/creative-agency.jpg" alt=""/>
                <div className="middle">
                <div className="text"><a href="https://mimnets-creative-agency.web.app/" target="_blank">Creative Agency</a></div>
                </div>
                </div>
            </div>
            <div className="col-md-6">
            <h1>Creative Agency</h1>
                <span>Creative agency is a website who provides website design, develoment services. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aliquam architecto unde, minima magnam ex corrupti tempore fuga repellendus pariatur. Rerum exercitationem, debitis ab reiciendis expedita vel vitae deleniti ducimus!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis ullam nihil consectetur deserunt amet, molestiae dicta temporibus quasi sequi voluptate nulla ex quo. Quo consequuntur blanditiis explicabo quos nam!
                </span>
                <h4>Technology use:</h4>
                <ul>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>React Router</li>
                </ul>
                
            </div>
        </div>
        </section>
    );
};

export default ProjectItem;