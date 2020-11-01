import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainHome from '../MainHome/MainHome';
import ProjectItem from '../ProjectItem/ProjectItem';
import Resume from '../Resume/Resume';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainHome></MainHome>
            <ProjectItem></ProjectItem>
            <Resume></Resume>
            <Footer></Footer>
        </div>
    );
};

export default Home;