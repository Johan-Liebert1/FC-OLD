import React, {useEffect} from 'react'
import useInputState from './hooks/useInputState'
import useStyles from './styles/AddNewCardSetFormStyles'
import BasicNavbar from './Navbars/BasicNavbar';

import { withStyles } from "@material-ui/styles";
import {ValidatorForm} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button';

import TextValidatorStyled from './forms/TextValidatorStyled'
import {v4 as uuid} from 'uuid'

function AddQuestionForm({classes, cardSet, addNewCardSet}) {

    const [separator, handleSeperatorChange, resetSeparator] = useInputState("")
    const [input, handleInputChange, reset] = useInputState("")
    const [setName, handleSetNameChange, resetSetName] = useInputState("")
    
    // console.log("Data coming in the props: ", data)

    const submitForm = (event) => {
        event.preventDefault()

        let separatedBy = separator
        let text = input
        let all_things = text.split("\n")
        // console.log(all_things) 

        var new_data = []

        for (let i = 0 ; i < all_things.length; i++){
            let question = all_things[i].split(separatedBy)[0]
            let answer = all_things[i].split(separatedBy)[1]
            let id = uuid()
            new_data.push({id: id, question: question, answer: answer})
        }

        // newData is a list
        addNewCardSet(setName, new_data)
        
        reset()
        resetSeparator()
        resetSetName()
    }

    useEffect(() => {
        ValidatorForm.addValidationRule('required', (value) => {
            if (value === '')
                return false
            else
                return true
        })

        ValidatorForm.addValidationRule('isNameUnique', value => {
            let new_set = cardSet.filter(set => set.setName.toLowerCase() === value.toLowerCase())
            if (new_set.length > 0)
                return false
            else
                return true
        })
        
    }, [separator, input, setName])

    useEffect(() => {
        ValidatorForm.addValidationRule('noSeparatorFound', value => {
            let all_input_chars = input.split("")
            if (!all_input_chars.includes(separator))
                return false
            else
                return true
        })
    }, [separator])
    
    return (
    <div className={classes.root}>
        <BasicNavbar />
        <div className={classes.form}>
            <ValidatorForm onSubmit={submitForm}>
                <div className="form-group mb-5">
                    <p>
                        Please enter a unique name for the New Set
                    </p>
                    <TextValidatorStyled 
                        className={classes.separatorField}
                        id="outlined-basic" 
                        label="Set Name" 
                        variant="outlined" 
                        value={setName}
                        onChange={handleSetNameChange}
                        validators={['required', 'isNameUnique']}
                        errorMessages={[
                            'This field is required',
                            'The Set Name is already used'
                        ]}
                        InputProps = {{
                            classes: {input: classes.formInput}
                        }}
                    />
                </div>
                <div className="form-group mb-5">
                    <TextValidatorStyled
                        id="standard-multiline-flexible"
                        label="Questions and Answers Seperated by a Symbol"
                        multiline
                        variant="outlined"
                        rows={10}
                        value={input}
                        onChange={handleInputChange}
                        fullWidth
                        validators={['required']}
                        errorMessages={[
                            'This field is required'
                        ]}
                        InputProps = {{
                            className: classes.formInput
                        }}
                    />
                </div>

                <div className="form-group mb-5">
                    <p>
                        Please enter the character seperating your questions from answers
                    </p>
                    <TextValidatorStyled 
                        className={classes.separatorField}
                        id="outlined-basic" 
                        label="Seperator" 
                        variant="outlined" 
                        value={separator}
                        onChange={handleSeperatorChange}
                        validators={['required', 'noSeparatorFound']}
                        errorMessages={[
                            'This field is required',
                            `The separator was not found in the input`
                        ]}
                        InputProps = {{
                            className: classes.formInput,
                        }}
                    />
                </div>
                
                
                <div className="form-group mb-5">
                    <Button variant="outlined" color="inherit"  type="submit">
                        Submit
                    </Button>
                </div>
            </ValidatorForm>
        </div>
    </div>
    )
}

export default withStyles(useStyles)(AddQuestionForm)
