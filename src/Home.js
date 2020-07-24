import React from 'react'
import {withStyles} from '@material-ui/styles'
import MiniCards from './MiniCards';
import BasicNavbar from './Navbars/BasicNavbar';
import styles from './styles/HomeStyles'
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Home({entireSet, classes, history, deleteSetFromApp}) {
    // const links = data_keys.map(key => <Link to={`${/key}`}>{key}</Link>)
    const goToCard = (id) => {
        history.push('/' + id + '/cards')
    }

    const deleteSet = (setId) => {
        deleteSetFromApp(setId)
    }

    return (
        <div className={classes.root}>
            <BasicNavbar />
            <h4 className={`${classes.title} mt-4`}>Your Study Sets</h4>

            <TransitionGroup className={classes.container}>
            
            {entireSet.map(set => 
            (   <CSSTransition key={set.setId} classNames='fade' timeout={500}>
                    <MiniCards 
                        
                        set={set} 
                        handleClick={() => goToCard(set.setId)}
                        deleteSet={deleteSet}
                    />
                </CSSTransition>
                )
            )
            }
            </TransitionGroup>
        </div>
    )
}

export default withStyles(styles)(Home)
