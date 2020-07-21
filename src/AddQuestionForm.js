import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import useInputState from './hooks/useInputState'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = {
  root: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        margin: '100px auto',
    },
    separatorField: {
        // height: '15px'
    }
}

function AddQuestionForm({classes, data}) {
    const [separator, handleSeperatorChange, resetSeparator] = useInputState("")
    const [value, handleValueChange, reset] = useInputState("")

    const submitForm = (event) => {
        event.preventDefault()
        let separatedBy = separator
        let text = value
        let all_things = text.split("\n")
        console.log(all_things) 
        var new_data = data
        for (let i = 0 ; i < all_things.length; i++){
            let question = all_things[i].split(separatedBy)[0]
            let answer = all_things[i].split(separatedBy)[1]
            let id = new_data.length
            new_data.push({id: id, question: question, answer: answer})
        }
        window.localStorage.setItem("words", JSON.stringify(new_data))
        
        reset()
        resetSeparator()
    }
    return (
        <div className={classes.root}>
            <form onSubmit={submitForm}>
                <div className="form-group mb-5">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Questions and Answers Seperated by a Symbol"
                        multiline
                        variant="outlined"
                        rows={10}
                        value={value}
                        onChange={handleValueChange}
                        fullWidth
                    />
                </div>

                <div className="form-group mb-5">
                    <p>
                        Please enter the character seperating your questions from answers
                    </p>
                    <TextField 
                        className={classes.separatorField}
                        id="outlined-basic" 
                        label="Seperator" 
                        variant="outlined" 
                        value={separator}
                        onChange={handleSeperatorChange}
                    />
                </div>
                
                
                <div className="form-group mb-5">
                    <Button variant="outlined" color="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </form>
            <Link to="/"><button>Home</button></Link>
        </div>
    )
}

export default withStyles(useStyles)(AddQuestionForm)
