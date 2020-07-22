const styles = {
    root: {
      width: 350,
      height: 400, 
      backgroundColor: 'rgb(40,40,40)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative'
    },
    question : {
        fontSize: '3rem',
        fontWeight: '500'
    },
    answer : {
        fontSize: '1.5rem',
        textAlign: 'center'
    },
    cardNumber : {
        position: 'absolute',
        top: '10px',
        right: '10px'
    }
  };

  export default styles