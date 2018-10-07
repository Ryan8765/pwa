import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';

//styles
import './Login.css';



const LoginForm = () => (
    <div className="login-wrapper-cust">
        <Grid className="login-grid" textAlign='center' verticalAlign='middle'>
            <Grid.Column className="login-column">
                {/* <Icon disabled name='warehouse' size="big" color="grey" />
        <Header as='h2' textAlign='center' color='green'>
            ABC Construction Co.
        </Header> */}

                <Header as='h2' icon textAlign='center'>
                    <Icon name='warehouse' circular size="tiny" />
                    <Header.Content>ABC Construction</Header.Content>
                </Header>

                <Form className="margin-top" size='large'>
                    <Segment raised>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Quick Base Email' />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Quick Base Password'
                            type='password'
                        />

                        <Button color='green' fluid size='large'>
                            Login
                </Button>
                    </Segment>
                </Form>
                <Message>
                    <a href='#'>Request Access</a>
                </Message>

            </Grid.Column>
        </Grid>
    </div>
    
)

export default LoginForm