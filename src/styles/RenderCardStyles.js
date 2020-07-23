const styles = {
    root : {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',
        backgroundColor: 'black'
    },
    right: {
        position: 'absolute',
        right: '25%',
        bottom: '15px',
        cursor: 'pointer',
        padding: '5px 15px', 
        color: 'white'
    },
    left: {
        position: 'absolute',
        left: '25%',
        bottom: '15px',
        cursor: 'pointer',
        padding: '15px 15px 0 15px',
        color: 'white'
    },
    cards : {
        padding: '50px',
        display: 'flex',
        flexDirection: 'column'
        // backgroundColor: 'green'
    }, 
    icon : {
        height: '50px',
        width: '50px'
    }, 
    link: {
        color: 'white'
    },
    setName: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        margin: '0 0 -45px 0',
        padding: '20px 0 0 0'
    }
}

export default styles