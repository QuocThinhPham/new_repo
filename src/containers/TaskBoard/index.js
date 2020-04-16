import { Button, Grid } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../constants';
import styles from './styles';
import * as taskActions from './../../actions/tasks';

class TaskBoard extends Component {
   componentDidMount() {
      const { taskActionCreators } = this.props;
      const { fetchTasks } = taskActionCreators;
      fetchTasks();
   }

   renderList = () => {
      let xhtml = null;
      xhtml = (
         <Grid container spacing={2}>
            {STATUSES.map((STATUS) => {
               const { tasks } = this.props;
               const taskFiltered = tasks.filter(
                  (task) => task.status === STATUS.value,
               );
               return (
                  <TaskList
                     key={STATUS.value}
                     STATUS={STATUS}
                     tasks={taskFiltered}
                  />
               );
            })}
         </Grid>
      );
      return xhtml;
   };

   render() {
      const { classes } = this.props;
      return (
         <div className={classes.taskboard}>
            <Button variant="outlined" className={classes.buttons}>
               <AddRoundedIcon className={classes.icons} />
               Add New Task
            </Button>
            {this.renderList()}
         </div>
      );
   }
}

TaskBoard.propTypes = {
   classes: PropTypes.object,
   tasks: PropTypes.array,
   taskActionCreators: PropTypes.shape({
      fetchTasks: PropTypes.func,
   }),
};

const mapStateToProps = (state) => ({
   tasks: state.tasks.tasks,
});

const mapDispatchToProps = (dispatch) => ({
   taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(TaskBoard);
