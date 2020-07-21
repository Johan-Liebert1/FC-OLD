import React, { useState } from 'react';

import { withStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import styles from './styles/CardStyles'


function FlashCard({ question, answer, classes }) {
    const [isQuestion, setIsQuestion] = useState(true)

    function handleClick() {
        setIsQuestion(!isQuestion)
    }    

    return (
        <Card className={classes.root} onClick={handleClick}>
            <CardContent>
                <Typography className={isQuestion ? classes.question : ''}>
                    {isQuestion ? question : answer}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(FlashCard)