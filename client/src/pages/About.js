import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';

const AboutStyle = createGlobalStyle`
body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
}
`;

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <AboutStyle whiteColor />
                <div></div>
            </React.Fragment>
        )
    }
}

export default About;