import React, { Component } from 'react';
import { Menu, Divider } from 'semantic-ui-react';


//styles
import './MainMenu.css';

class MainMenu extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state

        return (
            <div className="menu-positioning">
                <Menu fluid widths={3} color='teal' inverted>
                    <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
                    <Menu.Item name='Inspections' active={activeItem === 'Inspections'} onClick={this.handleItemClick} />
                    <Menu.Item name='Timesheets' active={activeItem === 'Timesheets'} onClick={this.handleItemClick} />
                </Menu>
            </div>
        )
    }
}


export default MainMenu; 