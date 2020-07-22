import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {withStyles} from '@material-ui/styles'

const styles = {
    root: {
        width: 175,
        height: 200, 
        backgroundColor: 'rgb(40,40,40)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative'
      },
      question : {
        fontSize: '1rem',
        color: 'white',
      },
      moreInfo : {
          fontSize: '0.7rem',
          color: '#6c7473'
      }
}

function MiniCards({words, classes, handleClick}) {
    // words arring from Home component

    // create a mini card for each language 
    // words is not the entire DB

    return (
        <div onClick={handleClick}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.question}>
                        {words.cardName}
                    </Typography>
                    <Typography className={classes.moreInfo}>
                        {words.cards.length} Cards
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default withStyles(styles)(MiniCards)
