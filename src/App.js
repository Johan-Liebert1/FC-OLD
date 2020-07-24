import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import dummyData from './seedData'
import RenderCards from './RenderCards';
import DeleteCards from './DeleteCards';
import Home from './Home';
import AddQuestionForm from './AddQuestionForm';
import AddNewCardSetForm from './AddNewCardSetForm';

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

    const deleteCards = (setId, question, answer, selectedCards=[]) => {
        if (selectedCards.length === 0){
            var new_words = cardsSet
            for (let i = 0; i < cardsSet.length; i++){
                if (new_words[i].setId === setId)
                    new_words[i].cards = new_words[i].cards.filter(
                        card => (card.question !== question && card.answer !== answer)
                    )
            }
            window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))

            setCardsSet(new_words)
        }
    }

    const deleteSet = (setId) => {
        let newCardsSet = cardsSet.filter(set => set.setId !== setId)
        setCardsSet(newCardsSet)
        window.localStorage.setItem('cardsSet', JSON.stringify(cardsSet))
    }

    return (
        <Switch>
            <Route 
                exact 
                path="/" 
                render={routeProps => 
                    <Home 
                        entireSet={cardsSet} 
                        {...routeProps}
                        deleteSetFromApp = {deleteSet}
                    />} 
                />
            <Route 
                exact 
                path="/:setId/add" 
                render={routeParams => 
                    <AddQuestionForm 
                        data={chooseSetToPass(routeParams.match.params.setId)}
                        addQuestionsFromForm={addQuestionsFromForm}
                    />
                } 
            />
            <Route 
                exact 
                path="/:setId/cards" 
                render={(routeParams) => 
                    <RenderCards 
                        dummyData={chooseSetToPass(routeParams.match.params.setId)} 
                    />} 
            />
            <Route
                exact 
                path = "/create/new-set"
                render = {
                    () => <AddNewCardSetForm cardSet={cardsSet} addNewCardSet={addNewCardSet}/>
                } 
            />
            <Route 
                exact
                path='/:setId/cards/delete'
                render={
                    (routeParams) =>( 
                    <DeleteCards 
                        cardSet={chooseSetToPass(routeParams.match.params.setId)}
                        realDeleteCardsFromApp={deleteCards}
                    />)
                }
            />
        </Switch>
    );
}

export default App;
