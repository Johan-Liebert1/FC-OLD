import React, {Component} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import {withStyles} from '@material-ui/styles'

const useStyles = {
    root: {
      width: 345,
      color: 'white',
      backgroundColor: 'black',
      margin: '5px',
      boxShadow: '0 0 20px white',
      height: 170,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0 5 10 10',
      overflow: 'hidden'
    },
    media: {
        height: 140,
    },
    answer : {
        color: '#6c7473'
    },
    button: {
        outline: 'none'
    }
  }

class DisplaySetCards extends Component {
    constructor(props){
        super(props)
        this.state = {
            isSelected: false
        }
        this.handleSelectClick = this.handleSelectClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }
    

    handleSelectClick() {
        this.setState({isSelected: !this.state.isSelected},() =>{
        
        if(this.state.isSelected){
            this.props.addSelectedIds(this.props.card.id, true)
            console.log(this.state.isSelected)}
        else{
            this.props.addSelectedIds(this.props.card.id, false)
            console.log(this.state.isSelected)}
        })
    }

    handleDeleteClick() {
        this.props.deleteCards(this.props.id)
    }

    render(){

        const {card, classes} = this.props
        const {isSelected} = this.state

        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.question}
                        </Typography>
                        <Typography className={classes.answer} variant="body2" component="p">
                            {card.answer}
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button 
                        size="small" 
                        color="secondary" 
                        variant="outlined" 
                        className={classes.button} 
                        style={{outline: 'none'}}
                        onClick={this.handleDeleteClick}
                    >
                        Delete
                    </Button>
                    <Button 
                        size="small" 
                        color="primary" 
                        variant={isSelected ? 'contained' : 'text'}
                        // onClick={this.handleSelectClick}
                        style={{outline: 'none'}}
                    >
                        {isSelected ? 'Selected' : 'Select'}
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(useStyles)(DisplaySetCards)