import React from 'react'
import {v4 as uuid} from 'uuid'
import {Link} from 'react-router-dom'
import useInputState from './hooks/useInputState'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
    },

}))

function AddQuestionForm({classes, data}) {
    const [value, handleChange, reset] = useInputState("")

    const submitForm = (event) => {
        event.preventDefault()
        let text = value
        let all_things = text.split("\n") 
        var new_data = data
        for (let i = 0 ; i < all_things.length; i++){
            let question = all_things[i].split("-")[0]
            let answer = all_things[i].split("-")[1]
            let id = new_data.length
            new_data.push({id: id, question: question, answer: answer})
        }
        window.localStorage.setItem("words", JSON.stringify(new_data))
        
        reset()
    }
    return (
        <div  className={classes.root}>
            <form onSubmit={submitForm}>
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax={10}
                    value={value}
                    onChange={handleChange}
                    style={{width: '50%'}}
                />
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Home</Link>
        </div>
    )
}

export default withStyles(useStyles)(AddQuestionForm)
