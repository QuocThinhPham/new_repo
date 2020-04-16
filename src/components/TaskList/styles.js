const styles = (theme) => ({
   statusBox: {},
   statusTitle: {
      display: 'grid',
   },
   statusClass: {
      padding: '10px 0',
      width: '100%',
   },
   error: {
      backgroundColor: theme.color.error.main,
      color: theme.color.error.contrastText,
   },
   warning: {
      backgroundColor: theme.color.warning.main,
      color: theme.color.warning.contrastText,
   },
   success: {
      backgroundColor: theme.color.success.main,
      color: theme.color.success.contrastText,
   },
   wrapperListTask: {},
});

export default styles;
