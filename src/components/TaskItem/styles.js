const styles = (theme) => ({
   card: {
      margin: '10px 0',
      borderStyle: theme.shape.borderStyle,
      borderColor: theme.shape.borderColor,
   },
   title: {},
   label: {
      textAlign: 'right',
   },
   desc: {},
   cardActions: {
      display: 'flex',
      flexDirection: 'row-reverse',
   },
   fabs: {
      backgroundColor: theme.color.primary.main,
      color: theme.color.primary.contrastText,
      margin: '0 5px',
      '&:hover': {
         backgroundColor: theme.color.primary.main,
         color: theme.color.primary.contrastText,
         opacity: '.8',
      },
   },
   error: {
      borderColor: theme.shape.borderColor.error.main,
   },
   warning: {
      borderColor: theme.shape.borderColor.warning.main,
   },
   success: {
      borderColor: theme.shape.borderColor.success.main,
   },
});

export default styles;
