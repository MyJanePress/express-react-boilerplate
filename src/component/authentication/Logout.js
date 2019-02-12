import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { mapStateToProps, mapDispatchToProps } from '../../actions/action';
import muiStyles from '../../assets/styles/logout';

class Logout extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    handleClose() {
    }

    handleLogout() {
        this.setState({
            anchorEl: null
        });
        this.props.logoutWatcher();
    }

    handleClick(event) {
        this.setState({
            anchorEl: event.currentTarget,
        });
    }

    render() { 
        const { anchorEl } = this.state;
        const { classes } = this.props;
        return ( 
            <div className={classes.menubar}>
              <Button
                className={classes.account}
                onClick={this.handleClick}
              >
                My account
                <i className="fa fa-caret-down"></i>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Account</MenuItem>
                <MenuItem component={RouterLink} to="/login" onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(muiStyles)(Logout));