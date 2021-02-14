import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchBar = () =>{
    const [keyword, setKeyword] = useState('programming');
    const [results, setResults] = useState([]);
    const onChangeInput = (keyword) =>{
        setKeyword(keyword);
    }
    useEffect(()=>{
       const searchWiki = async () =>{
          const data =  await axios.get('https://en.wikipedia.org/w/api.php', {
               params: {
                   action : 'query',
                   list : 'search',
                   origin : '*',
                   format : 'json',
                   srsearch : keyword
               }
           })
           setResults(data.data.query.search);
       }
       if(keyword && !results.length){
           searchWiki();
       }else{ 
           const timeoutId =  setTimeout(()=>{
             if(keyword){
                 searchWiki();
             }
            }, 500)

            return ()=>{
                clearTimeout(timeoutId);
            }
       }
       
    }, [keyword])
    const renderedResults = results.map((result)=>{
        return (
        <div key={result.pageid} className="item">
            <div className="right floated content">
                <a 
                className="ui button"
                href = {`https://en.wikipedia.org?curid=${result.pageid}`}
                >Go
                </a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>);
    });
    return (
        <div>
            <div className= "ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        value = {keyword}
                        onChange = {(e)=> onChangeInput(e.target.value)}
                        className="input">
                    </input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default SearchBar;

// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming