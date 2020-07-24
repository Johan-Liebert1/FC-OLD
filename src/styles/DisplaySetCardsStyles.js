export default {
    root: {
      width: 345,
      color: 'white',
      backgroundColor: 'black',
      margin: '5px',
      boxShadow: '0 0 20px white',
      height: 170,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0 5 10 10',
      overflow: 'hidden',
      position: 'relative'
    },
    media: {
        height: 140,
    },
    answer : {
        color: '#6c7473'
    },
    buttons: {
        marginLeft: '15px',
        marginBottom: '15px',
        "& button": {
            marginRight: '15px'
        }
    },
    cardID: {
        position: 'absolute',
        right: '10px',
        top: '10px'
    },
    
    // to change the color of the text the user inputs
    formInput: {
        color: 'white',
    },

    formButton: {
        position: 'absolute',
        right: '10px',
        bottom: '10px'
    },
    editIcon: {
        cursor: 'pointer'
    }
  }
