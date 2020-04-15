import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskBoard extends Component {
   render() {
      const { classes } = this.props;
      return (
         <div className={classes.taskboard}>
            <Button
               variant="contained"
               color="secondary"
               className={classes.buttons}
            >
               TaskBoard
            </Button>
         </div>
      );
   }
}

TaskBoard.propTypes = {
   classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
