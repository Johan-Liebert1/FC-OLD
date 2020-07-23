import React, {useState} from 'react'
import FlashCard from './FlashCard'

import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import styles from './styles/RenderCardStyles'

function RenderCards({dummyData, classes}) {

    console.log("dummyData in RenderCards: ", dummyData)

    const [cardId2, setCardId] = useState(0)

    const handleClickRight = () => {
        if (cardId2 < dummyData.cards.length - 1)
            setCardId(cardId2 + 1)
        else
            setCardId(0)
    }

    const handleClickLeft = () => {
        if (cardId2 > 0)
            setCardId(cardId2 - 1)
        else
            setCardId(dummyData.cards.length - 1)
    }
    const cards = dummyData.cards
    return (
        <div className={classes.root}>
            <Link 
                to={`/${dummyData.cardId}/add`} 
                style={{position: 'fixed', top: '10px'}}
                className={classes.link}
            >
                Add More Cards
            </Link>
            <Link 
                to="/" 
                style={{position: 'fixed', left: '10px'}}
                className={classes.link}
            >
                    Home
            </Link>
            <div className={classes.cards}>
                
                <FlashCard 
                    question={cards[cardId2].question} 
                    answer={cards[cardId2].answer} 
                    cardNumber={cardId2}
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
