import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainHome from '../MainHome/MainHome';
import ProjectItem from '../ProjectItem/ProjectItem';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <MainHome></MainHome>
            <ProjectItem></ProjectItem>
            <Footer></Footer>
        </div>
    );
};

export default Home;