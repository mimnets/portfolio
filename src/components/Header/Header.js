import React from 'react';
import { Link } from 'react-router-dom';
import ('./Header.css');

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'><span className='code-symbol'>&lt;</span>home<span className='code-symbol'>&gt;</span></Link>
            <Link to='/works'><span className='code-symbol'>&lt;</span>works<span className='code-symbol'>&gt;</span></Link>
            <Link to='/about'><span className='code-symbol'>&lt;</span>about-me<span className='code-symbol'>&gt;</span></Link>
            <Link to='/contacts'><span className='code-symbol'>&lt;</span>contacts<span className='code-symbol'>/&gt;</span></Link>
        </nav>
    );
};

export default Header;