const styles = (theme) => ({
   buttons: {
      backgroundColor: theme.color.primary.main,
      color: theme.color.primary.contrastText,
      marginBottom: 10,
      '&:hover': {
         backgroundColor: theme.color.primary.main,
         color: theme.color.primary.contrastText,
         opacity: '.8',
      },
   },
   icons: {
      marginRight: 15,
   },
});

export default styles;
