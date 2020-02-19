import React, { Component } from "react";
import Auth from "../auth";
import { Button } from "@material-ui/core";
import './home.css';
import { withStyles } from '@material-ui/styles';

class Home extends Component {
    state = {
        isAuth: false,
    };

    setAuth = () => {
        this.setState({
            isAuth: true
        });
    };

    render() {
        const { isAuth } = this.state;
        const { classes } = this.props;
        return (
            <div>
                {
                    isAuth ?
                    <Button variant="contained"
                            color="primary"
                            className={classes.label}
                            onClick={() => {this.setState({
                                isAuth: false
                            }); localStorage.setItem('token', '')}}>Выйти</Button>
                    :
                    <Auth isAuth={isAuth}
                          setAuth={this.setAuth}/>
                }
            </div>
        );
    };
};

const styles = () => ({
    label: {
        textTransform: 'none',
        color: 'white',
    }
})

export default withStyles(styles)(Home);