import React, {useState} from 'react'
import DisplaySetCards from './DisplaySetCards'
import {withStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'

import BasicNavbar from './Navbars/BasicNavbar'

const styles = {
    root : {
        padding: '0 0 30px 0',
        backgroundColor: 'black',
        minHeight: '100vh'
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
        margin: '30px auto',
    },
    title : {
        color: 'white',
        margin: '10px auto',
        textAlign: 'center'
    }
}

function DeleteCards({cardSet, classes, realDeleteCardsFromApp}) {
    const [selectedCards, setSelectedCards] = useState([])

    const delete_Cards = (id) => {
        // id is a list with either 1 or more elements
        realDeleteCardsFromApp(cardSet.setId, id)
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
    console.log('DELETE CARDS : RERENDERED')
    return (
        <div className={classes.root}>
            <BasicNavbar />
            <h3 className={classes.title}>Delete Cards in Set - {cardSet.setName}</h3>
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
                            key={card.id}
                            cardNumber={index+1}
                            addSelectedCards={addSelectedCards}
                            delete_Cards={delete_Cards}
                            forDeletingCards
                        />
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(DeleteCards)
