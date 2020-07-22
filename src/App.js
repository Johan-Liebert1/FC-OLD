import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import dummyData from './seedData'
import RenderCards from './RenderCards';
import Home from './Home';
import AddQuestionForm from './AddQuestionForm';

function App() {
    const [words, setWords] = useLocalStorageState("words", dummyData)

    const addQuestionsFromForm = async (cardName, newData) => {
        // newData is a list
        
        await setWords(words[cardName] = newData)
        window.localStorage.setItem('words', JSON.stringify(words))
        // const stringed_words = JSON.stringify(words)
        // console.log(stringed_words)
        // window.localStorage.setItem("words", stringed_words)
        
            
    }
    return (
        <Switch>
            <Route exact path="/" render={() => <Home data={words}/>} />
            <Route 
                exact 
                path="/:cardName/add" 
                render={routeParams => 
                    <AddQuestionForm 
                        data={words}
                        cardName={routeParams.match.params.cardName}
                        addQuestionsFromForm={addQuestionsFromForm}
                    />
                } 
            />
            <Route 
                exact 
                path="/:cardName/cards" 
                render={(routeParams) => 
                    <RenderCards 
                        dummyData={words[routeParams.match.params.cardName]} 
                        cardName={routeParams.match.params.cardName}
                    />} 
                />
        </Switch>
    );
}

export default App;
