import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import useInputState from './hooks/useInputState'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = {
    root: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: '100vh',
        color: 'white',
        margin: 0,
        paddingTop: '100px'
    },

    form: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        
    },
    unfocusedInput: {
        color: '#545b5e'
    },
    focusedInput : {
        color: 'white'
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `#545b5e !important`,
        }
    },
    cssFocused: {
        '&$cssFocused $notchedOutline': {
          borderColor: `white !important`,
        }
    },
}

function AddQuestionForm({classes, data, addQuestionsFromForm}) {

    const [separator, handleSeperatorChange, resetSeparator] = useInputState("")
    const [value, handleValueChange, reset] = useInputState("")
    // console.log("Data coming in the props: ", data)

    const submitForm = (event) => {
        event.preventDefault()
        
        let separatedBy = separator
        let text = value
        let all_things = text.split("\n")
        // console.log(all_things) 

        var new_data = data.cards

        for (let i = 0 ; i < all_things.length; i++){
            let question = all_things[i].split(separatedBy)[0]
            let answer = all_things[i].split(separatedBy)[1]
            let id = new_data.length
            new_data.push({id: id, question: question, answer: answer})
        }
        // newData is a list
        addQuestionsFromForm(data.cardId, new_data)
        
        reset()
        resetSeparator()
    }
    
    return (
    <div className={classes.root}>
        <div className={classes.form}>
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
                        InputLabelProps={{
                            classes: {
                              root: classes.unfocusedInput,
                              focused: classes.focusedInput,
                            },
                          }}
                          InputProps={{
                            classes: {
                              root: classes.cssOutlinedInput,
                              focused: classes.cssFocused,
                              notchedOutline: classes.notchedOutline,
                            }
                        }}
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
                    <Button variant="outlined" color="primary"  type="submit">
                        Submit
                    </Button>
                </div>
            </form>
            <Link to="/" style={{color: 'white'}}>Home</Link>
        </div>
    </div>
    )
}

export default withStyles(useStyles)(AddQuestionForm)
