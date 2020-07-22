import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import dummyData from './seedData'
import RenderCards from './RenderCards';
import Home from './Home';
import AddQuestionForm from './AddQuestionForm';

function App() {
    const [words, _] = useLocalStorageState("words", dummyData)
    return (
        <Switch>
            <Route exact path="/" render={() => <Home data={words}/>} />
            <Route exact path="/add" render={() => <AddQuestionForm data={words}/>} />
            <Route 
                exact 
                path="/:cardName/cards" 
                render={(routeParams) => 
                    <RenderCards dummyData={words[routeParams.match.params.cardName]} {...routeParams} />} 
                />
        </Switch>
    );
}

export default App;
