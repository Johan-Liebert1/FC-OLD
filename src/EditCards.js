import React from 'react'
import DisplaySetCards from './DisplaySetCards'
import { withStyles } from "@material-ui/styles";

const styles = {
    root : {
        padding: '30px 0 30px 0',
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
}

function EditCards({classes, cardSet, editCardFromApp}) {

    function edit(oldCard, newCard) {
        // oldCard and newCards are objects with cardId, question and answer
        let newCardList = cardSet.cards.filter(card => 
            (card.question !== oldCard.question && card.answer !== oldCard.answer)
        )
        newCardList = [...newCardList, newCard]
        
        editCardFromApp(cardSet.setId, newCardList)
    }

    return (
        <div className={classes.root}>
            
            <div className={classes.grid}>
                {cardSet.cards.map(
                    (card, index) => <DisplaySetCards 
                            card={card} 
                            key={card.question + toString(index)}
                            cardNumber={index+1}
                            forDeletingCards={false}
                            editCard={edit}
                        />
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(EditCards)
