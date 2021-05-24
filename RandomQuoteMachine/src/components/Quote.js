import stylez from "./Quote.module.css"
import Data from "./Data"
import { useState } from "react";
import { FaTwitter } from "react-icons/fa"

function Quote (){
    var index = Math.floor(Math.random() * 100)
    const [quotation, setQuote] = useState({quote: Data[index].quote, author: Data[index].author});
    function newQuote(){
        index = (Math.floor(Math.random() * 100));
        setQuote({quote: Data[index].quote, author: Data[index].author})
    }
    return <div>
    <h3 id = "text" className ={stylez.quote}>{quotation.quote}</h3>
    <p id = "author" className={stylez.author}>{quotation.author}</p>
    <div className = {stylez.divy}>
    <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quotation.quote}-${quotation.author}`}>
        <FaTwitter style={{color:"#dadada", width: "45px", height: "20px", marginBottom: "-5px"}}/>
    </a>
    <button id = "new-quote" className={stylez.btn} onClick={newQuote}>New Quote</button>
    </div>
    </div>
}

export default Quote