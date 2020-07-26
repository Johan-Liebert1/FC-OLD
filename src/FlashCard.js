import React, { useState } from 'react';

import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles/FlashCardStyles'

import ReactCardFlip from 'react-card-flip'


function FlashCard({ question, answer, classes, cardNumber }) {
    const [isFlipped, setIsFlipped] = useState(true)

    function handleClick() {
        setIsFlipped(!isFlipped)
    }    

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Card className={`${classes.root}`} onClick={handleClick}>
                <CardContent>
                    <div className={classes.cardNumber}>{cardNumber + 1}</div>
                    <Typography className={classes.answer}>
                        {answer}
                    </Typography>
                </CardContent>
            </Card>
            <Card className={`${classes.root}`} onClick={handleClick}>
                <CardContent>
                    <div className={classes.cardNumber}>{cardNumber + 1}</div>
                    <Typography className={classes.question}>
                        {question}
                    </Typography>
                </CardContent>
            </Card>
        </ReactCardFlip>
    );
}

export default withStyles(styles)(FlashCard)