import React, { useState } from 'react';

import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles/FlashCardStyles'


function FlashCard({ question, answer, classes, cardNumber }) {
    const [isQuestion, setIsQuestion] = useState(true)

    function handleClick() {
        setIsQuestion(!isQuestion)
    }    

    return (
        <Card className={`${classes.root}`} onClick={handleClick}>
            <CardContent>
                <div className={classes.cardNumber}>{cardNumber + 1}</div>
                <Typography className={isQuestion ? classes.question : classes.answer}>
                    {isQuestion ? question : answer}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(FlashCard)