import React, {useState, useEffect}from 'react'
import Accordion from './Accordion';
import ExcerciseOne from './ExcerciseOne';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import Translate from './Translate';

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

const options = [
    {
        id    : 'option1',
        label : 'Crimson Red',
        value : '#990000'
    },
    {
        id    : 'option2',
        label : 'Sea Blue',
        value : '#000029.'
    },
    {
        id    : 'option3',
        label : 'Forest Green',
        value : '#003333..'
    }
    
]

export default () =>{
    // const [selected, setSelected] = useState(options[0]);

    return(<div className="container mt-3">
              {/* <Accordion items = {items} test = 'test'/> */}
              {/* <ExcerciseOne/> */}
              {/* <SearchBar/> */}
              {/* <Dropdown 
                selected = {selected} 
                onSelectedChange = {setSelected} 
                options = {options}
              /> */}
              <Translate/>
       
         </div>);
}