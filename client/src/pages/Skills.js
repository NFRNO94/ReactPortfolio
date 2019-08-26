import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';

const SkillStyle = createGlobalStyle`
body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
}
`;

class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <SkillStyle whiteColor />
                <div></div>
            </React.Fragment>
        )
    }
}

export default Skills;