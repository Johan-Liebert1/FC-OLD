import React from 'react'
import {withStyles} from '@material-ui/styles'
import MiniCards from './MiniCards';
import BasicNavbar from './Navbars/BasicNavbar';
import styles from './styles/HomeStyles'


function Home({entireSet, classes, history}) {
    // const links = data_keys.map(key => <Link to={`${/key}`}>{key}</Link>)
    const goToCard = (id) => {
        history.push('/' + id + '/cards')
    }
    return (
        <div className={classes.root}>
            <BasicNavbar />
            <h4 className={`${classes.title} mt-4`}>Your Study Sets</h4>
            <div className={classes.container}>
            
            {entireSet.map(set => 
                (
                    <MiniCards 
                        set={set} 
                        handleClick={() => goToCard(set.setId)}
                    />
                
                )
            )
            }
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)
