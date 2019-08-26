import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';

const ExperienceStyle = createGlobalStyle`
body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
}
`;

class Experience extends Component {
    render() {
        return (
            <React.Fragment>
                <ExperienceStyle whiteColor />
                <div></div>
            </React.Fragment>
        )
    }
}

export default Experience;