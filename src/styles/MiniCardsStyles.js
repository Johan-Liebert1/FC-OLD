export default {
    root: {
        width: 175,
        height: 200, 
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0 0 20px white',
        "&:hover svg" : {
            opacity: 1
        }
    },
    question : {
        fontSize: '1rem',
        color: 'white',
        textAlign: 'center'
    },
    moreInfo : {
        fontSize: '0.7rem',
        color: '#6c7473',
        textAlign: 'center'
    },
    deleteIcon: {
        color: 'white',
        position: 'absolute',
        bottom: '15px',
        right: '15px',
        opacity: 0,
        '&:hover' : {
            color: 'red',
            transform: 'scale(1.5, 1.5)',
            transition: 'all 0.2s ease-in-out'
        }
    }
}