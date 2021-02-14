import React from 'react'
import Accordion from './Accordion';
import ExcerciseOne from './ExcerciseOne';
import SearchBar from './SearchBar';
const items = [
    {
        id   : 'item1',
        title : 'What is React?',
        content : 'React is a frone end javascript framework'
    },
    {
        id : 'item2',
        title: 'Why use React?',
        content : 'Because React is popular among programmer'
    },
    {
        id: 'item3',
        title: 'How do you use React?',
        content :  'React use component'
    }
];

export default () =>{
    return(<div className="container mt-3">
              {/* <Accordion items = {items} test = 'test'/> */}
              {/* <ExcerciseOne/> */}
              <SearchBar/>
         </div>);
}