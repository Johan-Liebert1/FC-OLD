import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import dummyData from './seedData'
import RenderCards from './RenderCards';
import Home from './Home';
import AddQuestionForm from './AddQuestionForm';
import AddNewCardSetForm from './AddNewCardSetForm';

function App() {
    const [words, setWords] = useLocalStorageState("words", dummyData)

    const addQuestionsFromForm =  (cardId, newData) => {
        // newData is a list
        var new_words = words
        for (let i = 0; i < new_words.length; i++) {
            if(new_words[i].cardId === cardId)
                new_words[i].cards = newData
        }
        console.log(new_words)
        setWords(
            new_words
        )
        window.localStorage.setItem('words', JSON.stringify(words))
    }

    const addNewCardSet = (setName, setCards) => {
        let setId = setName.toLowerCase().replace(' ', '-')
        let new_words = [...words, {cardName: setName, cardId: setId, cards: setCards} ]
        setWords(new_words)
        window.localStorage.setItem('words', JSON.stringify(words))

    }

    const chooseCardToPass = (id) => {
        const to_return = words.filter(card => id === card.cardId)[0]
        console.log("Returned from filter: ", to_return)
        return to_return
    }

    return (
        <Switch>
            <Route exact path="/" render={routeProps => <Home data={words} {...routeProps}/>} />
            <Route 
                exact 
                path="/:cardId/add" 
                render={routeParams => 
                    <AddQuestionForm 
                        data={chooseCardToPass(routeParams.match.params.cardId)}
                        addQuestionsFromForm={addQuestionsFromForm}
                    />
                } 
            />
            <Route 
                exact 
                path="/:cardId/cards" 
                render={(routeParams) => 
                    <RenderCards 
                        dummyData={chooseCardToPass(routeParams.match.params.cardId)} 
                    />} 
            />
            <Route
                exact 
                path = "/create/new-set"
                render = {
                    () => <AddNewCardSetForm cardSet={words} addNewCardSet={addNewCardSet}/>
                } 
            />
        </Switch>
    );
}

export default App;
