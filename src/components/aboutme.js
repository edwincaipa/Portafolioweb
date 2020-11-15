import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div class="col-lg-12 text-center texto">
        <h2 class="texto ">About Me</h2>
        <div class="col-lg-8 col-lg-offset-2">
          <p class="about-me-paragraph text-justify animate__animated animate__backInDown animate__repeat-2 ">
            Full Stack Web Developer using MongoDB, Express, React, Node.js (MERN) with an emphasis on Frontend web development
            and mobile using React & React Native. Experienced in building CRUD applications, RESTful APIs using Node.js
            and express, User Auth and oAuth with PassportJS and Firebase. Common libraries of use: Axios, Redux, Mongoose,
            Lodash, Express, body-parser, socket.io, react-router, redux- thunk. Common use of UI libraries: Bootstrap 4,
            React-Bootstrap, MaterializeCSS, Material-UI, Elemental-UI and Native-Base for React Native.</p>
        </div>
      </div>

    )
  }
}

export default About;
