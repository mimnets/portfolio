import React from 'react';
import './TopNav.css';
const TopNav = () => {
    return (
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light container nav">
  <a class="navbar-brand" href="/"><img src="https://1.bp.blogspot.com/-I133jKKCC9g/X5wyeHKUlsI/AAAAAAAAolY/hyzB7NE3Uak03gjqBVsfDifjwr3RetoHgCLcBGAsYHQ/s714/monirul-portfolio2.png" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default TopNav;