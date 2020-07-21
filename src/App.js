import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import { useLocalStorageState } from "./hooks/useLocalStorageState";
import dummyData from './seedData'
import RenderCards from './RenderCards';
import AddQuestionForm from './AddQuestionForm';

function App() {
    const [words, _] = useLocalStorageState("words", dummyData)
    console.log(words)
    return (
        <Switch>
            <Route exact path="/" render={() => <RenderCards dummyData={words}/>} />
            <Route exact path="/add" render={() => <AddQuestionForm data={words}/>} />
        </Switch>
    );
}

export default App;
