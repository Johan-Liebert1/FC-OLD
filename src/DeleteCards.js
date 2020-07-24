import React, {useState} from 'react'
import DisplaySetCards from './DisplaySetCards'
import {withStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'

const styles = {
    root : {
        padding: '30px 0 30px 0',
        backgroundColor: 'black',
        height: '100vh'
    },
    grid: {
        width: '80%',
        margin: '0 auto',
        paddingTop: '20px',
        display: 'grid',
        gridColumnGap: '20px',
        gridRowGap: '20px',
        gridTemplateColumns: 'auto auto auto'
    },
    button: {
        width: '80%',
        margin: '0 auto',
    }
}

function DeleteCards({cardSet, classes, realDeleteCardsFromApp}) {
    const [selectedCards, setSelectedCards] = useState([])

    const delete_Cards = (question, answer) => {
        // id is a list with either 1 or more elements
        realDeleteCardsFromApp(cardSet.setId, question, answer)
    }

    const addSelectedCards = (question, answer, doWeAdd = false) => {
        if (doWeAdd){
            let newlist = [...selectedCards, {question, answer}]
            setSelectedCards(newlist)
        }
        else{
            let newlist = selectedCards.filter(
                card => (card.question !== question && card.answer !== answer)
            )
            setSelectedCards(newlist)
        }
        console.log(setSelectedCards)
    }

    return (

        <div className={classes.root}>
            <div className={classes.button}>
                <Button 
                    style={{background:'#FF0000', marginLeft: 'auto', outline: 'none', color: "white"}} 
                    size='large' 
                    variant="contained"
                >   Delete Selected
                </Button>
            </div>

            <div className={classes.grid}>
                {cardSet.cards.map(
                    (card, index) => <DisplaySetCards 
                            card={card} 
                            key={index}
                            cardNumber={index+1}
                            addSelectedCards={addSelectedCards}
                            delete_Cards={delete_Cards}
                        />
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(DeleteCards)
