import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { render } from '@testing-library/react';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHander = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHander = () => {

        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
            <Toolbar openSideDrawer={this.sideDrawerOpenHander} />
            <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHander} />
            <main className={classes.Content}> {this.props.children} </main>
        </Aux>
        );
    }
        
        
};

export default Layout;