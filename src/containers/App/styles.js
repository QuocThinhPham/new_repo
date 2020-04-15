const styles = () => ({
   list: {
      width: '50%',
      margin: '0 auto',
      padding: 5,
      background: '#ddd',
      color: '#000',
      textAlign: 'center',
   },
   list__item: {
      padding: '8px',
      margin: 5,
      backgroundColor: '#fff',
      '&:hover': {
         backgroundColor: 'rgba(0,0,0,0.04)',
         cursor: 'pointer',
      },
   },
});

export default styles;
