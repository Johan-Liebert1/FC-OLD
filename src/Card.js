import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 400, 
    backgroundColor: 'rgb(40,40,40)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  question : {
      fontSize: '3rem',
      fontWeight: '500'
  },
});


function FlashCard({ question, answer }) {
    const classes = useStyles();
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

export default FlashCard