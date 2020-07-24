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
        height: '100vh',
    },
    link: {
        color: 'white',
        postion: 'fixed',
        top: '50%',
        left: '50%',
        fontSize: '3rem'
    },
    container : {
        width: '700px',
        margin: '50px auto',
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        textAlign:'center'
    }
}

export default styles