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

    return (
        <Switch>
            <Route exact path="/" render={routeProps => <Home entireSet={cardsSet} {...routeProps}/>} />
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
        </Switch>
    );
}

export default App;
