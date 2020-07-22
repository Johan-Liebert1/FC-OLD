const styles = {
    root : {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    right: {
        position: 'absolute',
        right: '25%',
        bottom: '15px',
        cursor: 'pointer',
        padding: '5px 15px', 
    },
    left: {
        position: 'absolute',
        left: '25%',
        bottom: '15px',
        cursor: 'pointer',
        padding: '15px 15px 0 15px'
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
    }
}

export default styles