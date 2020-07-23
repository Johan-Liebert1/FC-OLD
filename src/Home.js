import React from 'react'
import { Link } from "react-router-dom";
import {withStyles} from '@material-ui/styles'
import MiniCards from './MiniCards';

const styles = {
    root: {
        backgroundColor: "black",
        height: '100vh',
        paddingTop: '50px'
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
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
    }
}

function Home({entireSet, classes, history}) {
    // const links = data_keys.map(key => <Link to={`${/key}`}>{key}</Link>)
    const goToCard = (id) => {
        history.push('/' + id + '/cards')
    }
    return (
        <div className={classes.root}>
            <h4 style={{color: 'white'}}>HOME</h4>
            <Link to='/create/new-set' style={{color: 'white'}}>Create a new Set</Link>
            <div className={classes.container}>
            
            {entireSet.map(set => 
                (
                    <MiniCards 
                        set={set} 
                        handleClick={() => goToCard(set.setId)}
                    />
                
                )
            )
            }
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)
