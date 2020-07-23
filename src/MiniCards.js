import React from 'react'
import styles from './styles/MiniCardsStyles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/styles'


function MiniCards({set, classes, handleClick}) {
    // words arring from Home component

    // create a mini card for each language 
    // words is not the entire DB

    return (
        <div onClick={handleClick}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.question}>
                        {set.setName}
                    </Typography>
                    <Typography className={classes.moreInfo}>
                        {set.cards.length} Cards
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(MiniCards)
