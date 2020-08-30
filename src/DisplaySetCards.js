import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from '@material-ui/icons/Edit';
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

import {withStyles} from '@material-ui/styles'

import useStyles from './styles/DisplaySetCardsStyles'
import TextValidatorStyled from './forms/TextValidatorStyled'
import {ValidatorForm} from 'react-material-ui-form-validator'


class DisplaySetCards extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSelected: false,
            isDialogOpen: false,
            formOpen: false,
            formQuestion: this.props.card.question,
            formAnswer: this.props.card.answer
        }

        this.handleSelectClick = this.handleSelectClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.handleDialogDeleteClick = this.handleDialogDeleteClick.bind(this)
        this.openEditForm = this.openEditForm.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handleAnswerChange = this.handleAnswerChange.bind(this)
        this.submitEdit = this.submitEdit.bind(this)
    }
    
    componentDidMount() {
        ValidatorForm.addValidationRule('required', (value) => {
            if (value === '')
                return false
            else 
                return true
        })
    }

    handleSelectClick() {
        this.setState({isSelected: !this.state.isSelected},() => {
        
            if (this.state.isSelected){
                this.props.addSelectedCards(this.props.card.question, this.props.card.answer, true, false)
                console.log(this.state.isSelected)
            }
            else {
                this.props.addSelectedCards(this.props.card.question, this.props.card.answer, false, true)
                console.log(this.state.isSelected)
            }
        })
    }

    handleDeleteClick() {
        this.props.delete_Cards(this.props.card.id)
        this.setState({isDialogOpen: false})
    }

    openDialog() {
        this.setState({isDialogOpen: true})
    }

    closeDialog() {this.setState({isDialogOpen: false})}

    openEditForm() {
        this.setState({formOpen: true})
    }

    handleDialogDeleteClick() {
        this.handleDeleteClick()
    }

    handleQuestionChange(event) {
        this.setState({formQuestion: event.target.value})
    }

    handleAnswerChange(event) {
        this.setState({formAnswer: event.target.value})
    }

    submitEdit() {
        this.props.editCard(
            this.props.card,
            {id: this.props.card.id, question: this.state.formQuestion, answer: this.state.formAnswer}
        )
        this.setState({formOpen: false})
    }

    render(){
        const {classes, card, cardNumber, forDeletingCards} = this.props
        const {isSelected, isDialogOpen, formOpen, formQuestion, formAnswer} = this.state

        const editForm = (
            <ValidatorForm onSubmit={this.submitEdit}>
                <TextValidatorStyled 
                    label="Question" 
                    variant="standard" 
                    value={formQuestion}
                    onChange={this.handleQuestionChange}
                    validators={['required']}
                    errorMessages={[
                        'This field is required',
                    ]}
                    InputProps = {{
                        classes: {input: classes.formInput}
                    }}
                />
                <TextValidatorStyled 
                    className='mt-3'
                    label="Answer" 
                    variant="standard" 
                    value={formAnswer}
                    onChange={this.handleAnswerChange}
                    validators={['required']}
                    fullWidth
                    errorMessages={[
                        'This field is required',
                    ]}
                    InputProps = {{
                        classes: {input: classes.formInput}
                    }}
                />
                <div className={classes.formButton}>
                    <Button 
                        type='submit'
                        size="small"  
                        variant='contained'
                        style={{outline: 'none', width: '35px', backgroundColor: 'orange', color: 'white'}}
                    >
                        Save
                    </Button>
                </div>
            </ValidatorForm>
        )

        return (
            <>
            <Card className={classes.root}>
                <Typography className={classes.cardID}>{cardNumber}</Typography>
                
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2"
                        className={forDeletingCards && !formOpen ? 'mb-5' : 'mb-2'} 
                    >
                        {!formOpen ? card.question : editForm}

                        {
                            !forDeletingCards && !formOpen &&
                            <EditIcon className={`ml-3 ${classes.editIcon}`} onClick={this.openEditForm}/>
                        }

                    </Typography>
                    <Typography className={classes.answer} variant="body2" component="p">
                        {!formOpen && card.answer}
                    </Typography>
                </CardContent>
                
                {forDeletingCards &&
                <div className={classes.buttons}>
                    <Button 
                        size="small" 
                        color="secondary" 
                        variant="outlined" 
                        className={classes.button} 
                        style={{outline: 'none', width: '35px'}}
                        onClick={this.openDialog}
                    >
                        Delete
                    </Button>
                    <Button 
                        size="small" 
                        color="primary" 
                        variant={isSelected ? 'contained' : 'text'}
                        onClick={this.handleSelectClick}
                        style={{outline: 'none', width: '35px'}}
                    >
                        {isSelected ? 'Selected' : 'Select'}
                    </Button>
                </div>
                }

            </Card>

            <Dialog 
            aria-labelledby="simple-dialog-title" 
            open={isDialogOpen} 
            onClose={this.closeDialog}
            >   
                <DialogTitle id="simple-dialog-title">Delete This Card?</DialogTitle>
                <List>
                    <ListItem button onClick={this.handleDialogDeleteClick}>
                        <ListItemAvatar>
                            <Avatar style={{color: green[600], backgroundColor: green[200]}}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Delete' />
                    </ListItem>

                    <ListItem button onClick={this.closeDialog}>
                        <ListItemAvatar>
                            <Avatar style={{color: red[600], backgroundColor: red[200]}}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Cancel' />
                    </ListItem>
                </List>
            </Dialog>
            </>
        )
    }
}

export default withStyles(useStyles)(DisplaySetCards)
