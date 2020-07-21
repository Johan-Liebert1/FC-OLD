import React from 'react'
import FlashCard from './Card'

import {withStyles} from "@material-ui/styles"

const styles = {
    root : {
        display: 'flex', 
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
}

function RenderCards({dummyData, classes}) {
    return (
        <div className={classes.root}>
            {dummyData.map(data => (
                <FlashCard question={data.question} answer={data.answer} />
            ))}
        </div>
    )
}

export default withStyles(styles)(RenderCards)
