import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import useInputState from './hooks/useInputState'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'

const useStyles = {
    root: {
        height: '100vh',
        margin: 0,
        paddingTop: '100px'
    },

    form: {
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        
    },
    
}

function AddQuestionForm({classes, data, addQuestionsFromForm}) {

    const [separator, handleSeperatorChange, resetSeparator] = useInputState("")
    const [input, handleInputChange, reset] = useInputState("")

    useEffect(() => {
        ValidatorForm.addValidationRule('required', (value) => {
            if (value === '')
                return false
            else
                return true
        })
        
        

    }, [separator, input])

    useEffect(() => {
        ValidatorForm.addValidationRule('noSeparatorFound', value => {
            let all_input_chars = input.split("")
            if (!all_input_chars.includes(separator))
                return false
            else
                return true
        })
    }, [separator])

    const submitForm = (event) => {
        event.preventDefault()
        
        let separatedBy = separator
        let text = input
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
        addQuestionsFromForm(data.setId, new_data)
        
        reset()
        resetSeparator()
    }
    
    return (
    <div className={classes.root}>
        <div className={classes.form}>
            <ValidatorForm onSubmit={submitForm}>
                <div className="form-group mb-5">
                    <TextValidator
                        id="standard-multiline-flexible"
                        label="Questions and Answers Seperated by a Symbol"
                        multiline
                        variant="outlined"
                        name="input"
                        rows={10}
                        value={input}
                        onChange={handleInputChange}
                        fullWidth
                        validators={['required']}
                        errorMessages={[
                            'This field is required'
                        ]}
                        
                    />
                </div>

                <div className="form-group mb-5">
                    <p>
                        Please enter the character seperating your questions from answers
                    </p>
                    <TextValidator
                        className={classes.separatorField}
                        id="outlined-basic" 
                        label="Separator" 
                        name="Separator"
                        variant="outlined" 
                        value={separator}
                        onChange={handleSeperatorChange}
                        validators={['required', 'noSeparatorFound']}
                        errorMessages={[
                            'This field is required', 
                            `The separator was not found in the input`
                    ]}
                    />
                </div>
                
                
                <div className="form-group mb-5">
                    <Button variant="outlined" color="primary"  type="submit">
                        Submit
                    </Button>
                </div>
            </ValidatorForm>
            <Link to="/">Home</Link>
        </div>
    </div>
    )
}

export default withStyles(useStyles)(AddQuestionForm)
