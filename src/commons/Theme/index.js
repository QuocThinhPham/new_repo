import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   color: {
      primary: {
         light: '#757de8',
         main: '#3f51b5',
         dark: '#002984',
         contrastText: '#fff',
      },
      secondary: {
         light: '#fff64f',
         main: '#ffc400',
         dark: '#c79400',
         contrastText: '#000',
      },
      error: {
         light: '#ff6659',
         main: '#d32f2f',
         dark: '#9a0007',
         contrastText: '#fff',
      },
      warning: {
         light: '#ffff8b',
         main: '#ffd95a',
         dark: '#c9a826',
         contrastText: '#000',
      },
      success: {
         light: '#98ffb3',
         main: '#5efc82',
         dark: '#00c853',
         contrastText: '#000',
      },
   },
   shape: {
      borderRadius: 7,
      borderStyle: 'double',
      borderColor: {
         error: {
            light: '#ff6659',
            main: '#d32f2f',
            dark: '#9a0007',
         },
         warning: {
            light: '#ffff8b',
            main: '#ffd95a',
            dark: '#c9a826',
         },
         success: {
            light: '#98ffb3',
            main: '#5efc82',
            dark: '#00c853',
         },
      },
   },
});

export default theme;
