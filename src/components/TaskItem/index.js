import {
   Card,
   CardActions,
   CardContent,
   Fab,
   Grid,
   Typography,
   Box,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/styles';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';

class TaskItem extends Component {
   render() {
      const { classes, task, status } = this.props;
      return (
         <Card
            className={cn(classes.card, {
               [classes.error]: status.value === 0,
               [classes.warning]: status.value === 1,
               [classes.success]: status.value === 2,
            })}
         >
            <CardContent>
               <Grid container spacing={1}>
                  <Grid item md={9}>
                     <Typography variant="subtitle1">{task.title}</Typography>
                  </Grid>
                  <Grid item md={3}>
                     <Box className={classes.label}>{status.label}</Box>
                  </Grid>
                  <Grid item md={12}>
                     <Typography variant="body1">{task.desc}</Typography>
                  </Grid>
               </Grid>
            </CardContent>
            <CardActions className={classes.cardActions}>
               <Fab size="small" aria-label="delete" className={classes.fabs}>
                  <DeleteIcon />
               </Fab>
               <Fab size="small" aria-label="edit" className={classes.fabs}>
                  <EditIcon />
               </Fab>
            </CardActions>
         </Card>
      );
   }
}

TaskItem.propTypes = {
   classes: PropTypes.object,
   task: PropTypes.shape({
      title: PropTypes.string,
      desc: PropTypes.string,
   }),
   status: PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
   }),
};

export default withStyles(styles)(TaskItem);
