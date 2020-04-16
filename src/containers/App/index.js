import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import theme from './../../commons/Theme';
import configStore from './../../redux/configStore';
import TaskBoard from './../TaskBoard';
import styles from './styles';

const store = configStore();

class App extends Component {
   render() {
      return (
         <Provider store={store}>
            <ThemeProvider theme={theme}>
               <TaskBoard />
            </ThemeProvider>
         </Provider>
      );
   }
}

App.propTypes = {};

export default withStyles(styles)(App);
