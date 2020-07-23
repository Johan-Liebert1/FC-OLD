import React, {useState} from 'react'
import DisplaySetCards from './DisplaySetCards'
import {withStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import red from '@material-ui/core/colors/red'

const styles = {
    root : {
        padding: '30px 0 30px 0',
        backgroundColor: 'black',
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
    const [selectedIds, setSelectedIds] = useState([])

    const deleteCards = (id) => {
        // id is a list with either 1 or more elements
        realDeleteCardsFromApp(cardSet.setId, id)
    }

    // const addSelectedIds = (id, doWeAdd = false) => {
    //     if (doWeAdd){
    //         let newlist = [...selectedIds, id]
    //         setSelectedIds(newlist)
    //     }
    //     else{
    //         let newlist = selectedIds.filter(id1 => id1 !== id)
    //         setSelectedIds(newlist)
    //     }
    //     console.log(setSelectedIds)
    // }

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
                    card => 
                        <DisplaySetCards 
                            card={card} 
                            key={card.id}
                            id={card.id}
                            // addSelectedIds={addSelectedIds}
                            deleteCards={deleteCards}
                        />
                )}
            </div>
        </div>
    )
}

export default withStyles(styles)(DeleteCards)
