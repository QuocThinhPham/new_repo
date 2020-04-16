import { Box, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
   render() {
      const { classes, STATUS: status, tasks } = this.props;
      return (
         <Grid item md={4}>
            <Box my={1} className={classes.statusTitle}>
               <Typography
                  variant="inherit"
                  align="center"
                  className={cn(classes.statusClass, {
                     [classes.error]: status.value === 0,
                     [classes.warning]: status.value === 1,
                     [classes.success]: status.value === 2,
                  })}
               >
                  {status.label}
               </Typography>
            </Box>
            <Box className={classes.wrapperListTask}>
               {tasks.map((task) => {
                  return <TaskItem key={task.id} task={task} status={status} />;
               })}
            </Box>
         </Grid>
      );
   }
}

TaskList.propTypes = {
   classes: PropTypes.object,
   STATUS: PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
   }),
   tasks: PropTypes.array,
};

export default withStyles(styles)(TaskList);
