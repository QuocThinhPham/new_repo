import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TaskBoard from '../TaskBoard';
import styles from './styles';

class App extends Component {
   render() {
      const { classes, tasks } = this.props;
      return (
         <Box className={classes.list}>
            {tasks.map((task) => (
               <p key={task.name} className={classes.list__item}>
                  Name: {task.name} - <span>{task.age}</span>
               </p>
            ))}
            <TaskBoard />
         </Box>
      );
   }
}

App.propTypes = {
   classes: PropTypes.object,
   tasks: PropTypes.array,
};
const mapStateToProps = (state) => ({
   tasks: state.tasks,
});

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(App);
