import React from 'react';
import {Switch, Route} from 'react-router-dom'

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import dummyData from './seedData'
import RenderCards from './RenderCards';
import DeleteCards from './DeleteCards';
import Page from './Page'
import Home from './Home';
import AddQuestionForm from './AddQuestionForm';
import AddNewCardSetForm from './AddNewCardSetForm';
import EditCards from './EditCards'

import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
    const [cardsSet, setCardsSet] = useLocalStorageState("cardsSet", dummyData)

    const addQuestionsFromForm =  (setId, newData) => {
        // newData is a list
        var new_words = cardsSet
        for (let i = 0; i < new_words.length; i++) {
            if(new_words[i].setId === setId)
                new_words[i].cards = newData
        }
        // console.log(new_words)
        setCardsSet(
            new_words
        )
        window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))
    }

    const addNewCardSet = (setName, setCards) => {
        let setId = setName.toLowerCase().replace(' ', '-')
        let new_words = [...cardsSet, {setName: setName, setId: setId, cards: setCards} ]
        setCardsSet(new_words)
        window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))

    }

    const chooseSetToPass = (id) => {
        const to_return = cardsSet.filter(set => id === set.setId)[0]
        console.log("Returned from filter: ", to_return)
        return to_return
    }

    const deleteCards = async (setId, id, selectedCards=[]) => {
        if (selectedCards.length === 0){
            var new_words = cardsSet
            for (let i = 0; i < cardsSet.length; i++){
                if (new_words[i].setId === setId)
                    new_words[i].cards = new_words[i].cards.filter(
                        card => card.id !== id
                    )
            }
            await setCardsSet(new_words)
        }
        window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))
    }

    const deleteSet = (setId) => {
        let newCardsSet = cardsSet.filter(set => set.setId !== setId)
        setCardsSet(newCardsSet)
        window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))
    }

    const editCardFromApp = (setId, newCardsList) => {
        let new_cardSet = cardsSet
        for (let i = 0; i < new_cardSet.length; i++){
            if(new_cardSet[i].setId === setId){
                new_cardSet[i].cards = newCardsList
            }
        }
        setCardsSet(new_cardSet)
        window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))
    }

    return (
        <Route render = { ({location}) =>
        <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={500}>
        <Switch>
            
            <Route 
                exact 
                path="/" 
                render={routeProps => 
                    <Page>
                    <Home 
                        entireSet={cardsSet} 
                        {...routeProps}
                        deleteSetFromApp = {deleteSet}
                    />
                    </Page>
                    } 
                />
            <Route 
                exact 
                path="/:setId/add" 
                render={routeParams => 
                    <Page>
                    <AddQuestionForm 
                        data={chooseSetToPass(routeParams.match.params.setId)}
                        addQuestionsFromForm={addQuestionsFromForm}
                    />
                    </Page>
                } 
            />
            <Route 
                exact 
                path="/:setId/cards" 
                render={(routeParams) => 
                    <Page>
                    <RenderCards 
                        dummyData={chooseSetToPass(routeParams.match.params.setId)} 
                    />
                    </Page>
                } 
            />
            <Route
                exact 
                path = "/create/new-set"
                render = {
                    () => <Page>
                    <AddNewCardSetForm cardSet={cardsSet} addNewCardSet={addNewCardSet}/>
                    </Page>
                } 
            />
            <Route 
                exact
                path='/:setId/cards/delete'
                render={
                    (routeParams) => 
                    <Page>
                    <DeleteCards 
                        cardSet={chooseSetToPass(routeParams.match.params.setId)}
                        realDeleteCardsFromApp={deleteCards}
                    />
                    </Page>
                }
            />
            <Route 
                exact
                path='/:setId/cards/edit'
                render={
                    (routeParams) => 
                    <Page>
                    <EditCards 
                        cardSet={chooseSetToPass(routeParams.match.params.setId)}
                        editCardFromApp={editCardFromApp}
                    />
                    </Page>
                }
            />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        }/>
    );
}

export default App;
