import React, { Component } from "react";
import { createGlobalStyle } from 'styled-components';

const HomeStyle = createGlobalStyle`
body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
}
`;

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <HomeStyle whiteColor />
                <div>
                    <h1>My name is Dante, and I am a Full Stack Web Developer.
                        Click <strong>Here</strong> to learn more about me!
                    </h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;