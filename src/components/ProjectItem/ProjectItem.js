import React from 'react';
import './ProjectItem.css';
const ProjectItem = () => {
    return (
        <section className="container project-container" id="projects">
            <div><h2>Projects</h2></div>
            <div className="row my-5">
            <div className="col-md-6">
            <div className="image-container">
                <img className="image" src="https://1.bp.blogspot.com/-w6tC92YaiuA/X57cgta0WRI/AAAAAAAAonw/zrKWr50eqNkwVb2zeBwNQtzqa-ZQbwkdwCLcBGAsYHQ/s570/premier-associates-final.jpg" alt=""/>
                <div className="middle">
                <div className="text">
                <h2>Premier Associates Ltd</h2>
                <span>Premier Associates Ltd is industrial machinary supplier. <br/>Clients requirement was a simple one page website within short period time. <br/>I have done it with the basics of my web developmet course project creative Agency.
                </span>
                <br/>
                <br/>
                <h5>Technology use:</h5>
                <span>ReactJS</span><br/>
                <span>React Router</span><br/>
                <span>Material UI</span><br/>
                <span>Bootstrap</span><br/><br/>
                <a className="btn btn-primary btn-sm mx-2" role="button" href="https://premiermktbd.com/" target="_blank">Live Site</a>
                <a className="btn btn-primary btn-sm mx-2" role="button" href="https://github.com/mimnets/premier-associates-ca" target="_blank">GitHub UI</a>

                </div>
                </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="image-container">
                <img className="image" src="https://1.bp.blogspot.com/-1O2PBandcPg/X52Oms_mTVI/AAAAAAAAom8/N6hDJCikiT0jvUtAyZAC6wm_pmr45CFZQCLcBGAsYHQ/s570/creative-agency.jpg" alt=""/>
                <div className="middle">
                <div className="text">
                <h2>Creative Agency</h2>
                <span>Creative agency is a website design, develoment services provider. <br/>This project assigned as a learning path at my Web Development course.
                </span>
                <br/>
                <br/>
                <h5>Technology use:</h5>
                <span>ReactJS</span><br/>
                <span>NodeJS</span><br/>
                <span>MongoDB</span><br/>
                <span>Bootstrap</span><br/><br/>
                <a className="btn btn-primary btn-sm mx-2" role="button" href="https://mimnets-creative-agency.web.app/" target="_blank">Live Site</a>
                <a className="btn btn-primary btn-sm mx-2" role="button" href="https://github.com/mimnets/creative-agency" target="_blank">GitHub UI</a>
                <a className="btn btn-primary btn-sm mx-2" role="button" href="https://github.com/mimnets/creative-agency-server" target="_blank">GitHub Server</a>

                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ProjectItem;