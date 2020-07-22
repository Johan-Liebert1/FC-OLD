import React from 'react'
import { Link } from "react-router-dom";
import {withStyles} from '@material-ui/styles'
import MiniCards from './MiniCards';

const styles = {
    root: {
        backgroundColor: "rgb(140,140,140)",
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

function Home({data, classes, history}) {
    // const links = data_keys.map(key => <Link to={`${/key}`}>{key}</Link>)
    const goToCard = (id) => {
        history.push('/' + id + '/cards')
    }
    return (
        <div className={classes.root}>
            <h4>HOME</h4>
            <div className={classes.container}>
            
            {data.map(card => 
                (
                    <MiniCards 
                        words={card} 
                        handleClick={() => goToCard(card.cardId)}
                    />
                
                )
            )
            }
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)
