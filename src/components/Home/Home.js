import React from 'react';

import { Icon, Segment } from 'semantic-ui-react';

import MainMenu from '../../containers/MainMenu/MainMenu';

const Home = (props) => {
    return (
        <React.Fragment>
            <h3 className="margin-top centered">Welcome Back, Ryan Haas!</h3>
            <Segment raised>
                <div className="centered margin-top-lrg">
                    <Icon disabled name='wrench' size="huge" />
                    <br />
                    <br />
                    My Service Calls
                </div>
                <div className="centered margin-top-lrg">
                    <Icon disabled name='calendar alternate' size="huge" />
                    <br />
                    <br />
                    TimeSheet
                </div>
            </Segment>
            <MainMenu />
        </React.Fragment>
    );
};

export default Home;

