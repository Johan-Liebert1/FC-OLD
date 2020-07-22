import React, {useState} from 'react'
import FlashCard from './Card'

import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import styles from './styles/RenderCardStyles'

function RenderCards({dummyData, classes, cardName}) {
    console.log("dummyData in RenderCards: ", dummyData)
    const [cardId, setCardId] = useState(0)

    const handleClickRight = () => {
        if (cardId < dummyData.length - 1)
            setCardId(cardId + 1)
    }

    const handleClickLeft = () => {
        if (cardId > 0)
            setCardId(cardId - 1)
    }

    return (
        <div className={classes.root}>
            <Link to={`/${cardName}/add`} style={{position: 'fixed', top: '10px'}}>Add</Link>
            <Link to="/" style={{position: 'fixed', left: '10px'}}>Home</Link>
            <div className={classes.cards}>
                
                <FlashCard 
                    question={dummyData[cardId].question} 
                    answer={dummyData[cardId].answer} 
                    
                />
                <div className={classes.icons}>

                    <div className={classes.right} onClick={handleClickRight}>
                        <KeyboardArrowRightIcon className={classes.icon}/>
                    </div>
                    <div className={classes.left} onClick={handleClickLeft}>
                        <KeyboardArrowLeftIcon className={classes.icon}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(RenderCards)
