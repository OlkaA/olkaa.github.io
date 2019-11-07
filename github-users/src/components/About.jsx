import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <>
                <Link to='/' className="arrow-back">&larr;</Link>
                <div className="align-center">
                    <h1>Github</h1>
                    <h2>is how people build software.</h2>
                    <h4>At this project were used technologies</h4>
                    <h4>and instruments such as</h4>
                    <h4>React, SCSS, Github, JS, HTML, CSS3, Visual Code, brain.</h4>
                    <p>Creator: Olha Afanasieva</p>
                </div>
            </>
        );
    }
}

export default About;