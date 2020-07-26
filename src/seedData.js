import { v4 as uuid } from "uuid";

export default [
    
    { 
    setName: "English Words" ,
    setId: 'english-words',
    cards: [
        {
            id: uuid(), 
            question: 'Disingenious', 
            answer: 'Not candid or sincere by pretending one know less than one actually does'
        },

        {
            id: uuid(), 
            question: 'Scrutiny', 
            answer: 'Critical Observation'
        },

        {
            id: uuid(), 
            question: 'Assail', 
            answer: 'Make a violent attack on'
        },

        {
            id: uuid(), 
            question: 'Eschew', 
            answer: 'Deliberately Avoid Using'
        },

        {
            id: uuid(), 
            question: 'Infallible', 
            answer: 'Incapable of making mistakes'
        },
        {
            id: uuid(), 
            question: 'Serendipitous', 
            answer: 'Happenning for a good reason'
        },
        {
            id: uuid(), 
            question: 'Superflous', 
            answer: 'Unnecessary'
        },
        {
            id: uuid(), 
            question: 'Augury', 
            answer: 'An Omen'
        },
        {
            id: uuid(), 
            question: 'Asinine', 
            answer: 'Stupid'
        },
        {
            id: uuid(), 
            question: 'Abeyance', 
            answer: 'In a temporary state of unuse'
        },
    ]},
    
    {
    setName: "Japanese Words",
    setId: 'japanese-words',
    cards: [
        {
            id: uuid(), 
            question: 'いしゃ', 
            answer: 'Doctor'
        },

        {
            id: uuid(), 
            question: 'へいし', 
            answer: 'Soldier'
        },

        {
            id: uuid()  , 
            question: 'けんちくか', 
            answer: 'Architect'
        },

        {
            id: uuid() , 
            question: 'きょうし', 
            answer: 'Teacher'
        },

        {
            id: uuid()  , 
            question: 'かしゅ', 
            answer: 'Singer'
        },
    ]
},{
    setName: "Anime Manga Cards",
    setId: 'anime-manga-cards',
    cards: [
        {
            id: uuid()  , 
            question: 'Monster', 
            answer: 'Naoki Urasawa'
        },

        {
            id: uuid() , 
            question: 'Berserk', 
            answer: 'Kentaro Miura'
        },

        {
            id: uuid()  , 
            question: 'Legend of the Galactic Heores', 
            answer: 'Yoshiki Tanaka'
        },

        {
            id: uuid(), 
            question: 'Mushishi', 
            answer: 'Urashibara Yuki'
        },

        {
            id: uuid(), 
            question: '20th Century Boys', 
            answer: 'Naoki Urasawa'
        },
    ]
}
]
