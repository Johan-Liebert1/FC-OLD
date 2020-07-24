import React, {useState} from 'react'
import styles from './styles/MiniCardsStyles'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {withStyles} from '@material-ui/styles'

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from "@material-ui/icons/Close";
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

function MiniCards({set, classes, handleClick, deleteSet}) {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    // words arring from Home component

    // create a mini card for each language 
    // words is not the entire DB


    function handleDeleteClick() {
        deleteSet(set.setId)
        setIsDialogOpen(false)
    }

    function openDialog(event) {
        event.stopPropagation()
        setIsDialogOpen(true)
    }
    function closeDialog() {setIsDialogOpen(false)}

    return (
        <div>
        <div onClick={handleClick}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.question}>
                        {set.setName}
                    </Typography>
                    <Typography className={classes.moreInfo}>
                        {set.cards.length} Cards
                    </Typography>
                    
                </CardContent>
                
                <DeleteIcon className={classes.deleteIcon} onClick={openDialog}/>
                
            </Card>
        </div>

        <Dialog 
            aria-labelledby="simple-dialog-title" 
            open={isDialogOpen} 
            onClose={closeDialog}
        >
            <DialogTitle id="simple-dialog-title">Delete This Card?</DialogTitle>
            <List>
                <ListItem button onClick={handleDeleteClick}>
                    <ListItemAvatar>
                        <Avatar style={{color: green[600], backgroundColor: green[200]}}>
                            <CheckIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Delete' />
                </ListItem>

                <ListItem button onClick={closeDialog}>
                    <ListItemAvatar>
                        <Avatar style={{color: red[600], backgroundColor: red[200]}}>
                            <CloseIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='Cancel' />
                </ListItem>
            </List>
        </Dialog>
        </div>
    )
}

export default withStyles(styles)(MiniCards)
