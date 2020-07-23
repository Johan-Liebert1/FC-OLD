const styles = {
    root: {
      width: 350,
      height: 400, 
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative',
      boxShadow: '0 0 20px white'
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