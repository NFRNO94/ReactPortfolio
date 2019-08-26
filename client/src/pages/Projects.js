import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';

const ProjectStyle = createGlobalStyle`
body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
}
`;

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <ProjectStyle whiteColor />
                <div></div>
            </React.Fragment>
        )
    }
}

export default Projects;