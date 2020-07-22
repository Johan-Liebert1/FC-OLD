import React from 'react'
import { Link } from "react-router-dom";
import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        backgroundColor: "rgb(40,40,40)",
        height: '100vh'
    },
    link: {
        color: 'white',
        postion: 'fixed',
        top: '50%',
        left: '50%',
        fontSize: '3rem'
    }
}

function Home({data, classes}) {
    // const links = data_keys.map(key => <Link to={`${/key}`}>{key}</Link>)

    return (
        <div className={classes.root}>
            {data.map(card => 
                <li>
                    <Link to={`/${card.cardId}/cards`}  key={card.cardId} className={classes.link}>
                        {card.cardName}
                    </Link>
                </li>
            )
            }
        </div>
    )
}

export default withStyles(styles)(Home)
