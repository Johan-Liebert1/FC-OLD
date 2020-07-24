const styles = {
    "@global": {
        ".fade-exit": {
          opacity: 1
        },
        ".fade-exit-active": {
          opacity: 0,
          transition: "opacity 500ms ease-out"
        }
    },

    root: {
        backgroundColor: "black",
        widht: '100vw',
        minHeight: '100vh',
        paddingBottom: '30px'
    },
    link: {
        color: 'white',
        postion: 'fixed',
        top: '50%',
        left: '50%',
        fontSize: '3rem'
    },
    container : {
        width: '75%',
        margin: '50px auto',
        display: 'grid',
        gridColumnGap: '40px',
        gridRowGap: '40px',
        gridTemplateColumns: 'auto auto auto auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        textAlign:'center'
    }
}

export default styles